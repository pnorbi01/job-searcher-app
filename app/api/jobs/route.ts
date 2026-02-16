import { mapApiResponseJobs } from "@/features/jobs/lib/normalize";
import { jobicyResponseSchema, jobsQuerySchema } from "@/features/jobs/schemas";
import { NextRequest, NextResponse } from "next/server";

const JOBICY_API_URL = process.env.JOBICY_API_BASE_URL;
const DEFAULT_JOB_COUNT = Number(process.env.DEFAULT_JOB_COUNT ?? 50);

export async function GET(request: NextRequest): Promise<NextResponse> {
    if (!JOBICY_API_URL) {
        return NextResponse.json(
            { error: "Server misconfiguration: JOBICY_API_BASE_URL is missing." },
            { status: 500 }
        );
    }

    const rawQuery = Object.fromEntries(request.nextUrl.searchParams.entries());
    const normalizedQuery = {
        ...rawQuery,
        jobGeo: typeof rawQuery.jobGeo === "string" ? rawQuery.jobGeo.toLowerCase() : undefined,
        industry: typeof rawQuery.industry === "string" ? rawQuery.industry.toLowerCase() : undefined,
    };

    const parsedQuery = jobsQuerySchema.safeParse(normalizedQuery);

    if (!parsedQuery.success) {
        const issue = parsedQuery.error.issues[0];
        const field = String(issue.path[0] ?? "query");
        const badValue = (normalizedQuery as Record<string, unknown>)[field];

        return NextResponse.json(
            { error: `Invalid ${field} value: "${String(badValue)}".` },
            { status: 400 }
        );
    }

    const { jobGeo, industry } = parsedQuery.data;

    const upstreamParams = new URLSearchParams();
    upstreamParams.set("count", String(DEFAULT_JOB_COUNT));
    if (jobGeo) upstreamParams.set("geo", jobGeo);
    if (industry) upstreamParams.set("industry", industry);

    const upstreamUrl = `${JOBICY_API_URL}?${upstreamParams.toString()}`;

    try {
        const response = await fetch(upstreamUrl, { next: { revalidate: 300 } });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Upstream API error: ${response.status}` },
                { status: 502 }
            );
        }

        const json = await response.json();
        const parsedUpstream = jobicyResponseSchema.safeParse(json);

        if (!parsedUpstream.success) {
            return NextResponse.json(
                { error: "Upstream response format unexpected." },
                { status: 502 }
            );
        }

        const jobs = mapApiResponseJobs(parsedUpstream.data.jobs);
        return NextResponse.json({ jobs });
    } catch (error) {
        console.error("Failed to fetch from Jobicy API:", error);
        return NextResponse.json(
            { error: "Failed to fetch jobs. Please try again later." },
            { status: 500 }
        );
    }
}