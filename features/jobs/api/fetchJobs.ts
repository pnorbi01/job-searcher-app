import type { Job } from "@/features/jobs/types";

export interface FetchJobsParams {
    jobGeo?: string;
    industry?: string;
    signal?: AbortSignal;
}

type JobsApiResponse = { jobs: Job[] };

export async function fetchJobs(params: FetchJobsParams = {}): Promise<Job[]> {
    const searchParams = new URLSearchParams();
    if (params.jobGeo) searchParams.set("jobGeo", params.jobGeo);
    if (params.industry) searchParams.set("industry", params.industry);

    const qs = searchParams.toString();
    const url = `/api/jobs${qs ? `?${qs}` : ""}`;

    const res = await fetch(url, { signal: params.signal });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
            (errorData as { error?: string }).error || `Failed to fetch jobs (${res.status})`
        );
    }

    const data = (await res.json()) as JobsApiResponse;
    return data.jobs ?? [];
}
