import type { JobicyApiJob } from "@/features/jobs/api/jobicy.types";
import type { Job } from "@/features/jobs/types";
import { decodeHtmlEntities } from "@/lib/text";

export function mapApiJobToJob(raw: JobicyApiJob): Job {
    return {
        id: raw.id,
        url: raw.url,
        title: decodeHtmlEntities(raw.jobTitle),
        company: decodeHtmlEntities(raw.companyName),
        companyLogo: raw.companyLogo,
        industries: raw.jobIndustry ?? [],
        types: raw.jobType ?? [],
        geo: raw.jobGeo,
        level: raw.jobLevel,
        excerpt: decodeHtmlEntities(raw.jobExcerpt),
    };
}

export function mapApiResponseJobs(rawJobs: JobicyApiJob[]): Job[] {
    return rawJobs.map(mapApiJobToJob);
}