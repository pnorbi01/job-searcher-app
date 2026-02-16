import { INDUSTRY_VALUES, JOB_GEO_VALUES } from "@/features/jobs/constants";
import { z } from "zod";

export const jobsQuerySchema = z.object({
    jobGeo: z.enum(JOB_GEO_VALUES).optional(),
    industry: z.enum(INDUSTRY_VALUES).optional(),
});

export type JobsQuery = z.infer<typeof jobsQuerySchema>;

export const jobicyJobSchema = z.object({
    id: z.number(),
    url: z.string(),
    jobTitle: z.string(),
    companyName: z.string(),
    companyLogo: z.string().optional().default(""),
    jobIndustry: z.array(z.string()).optional().default([]),
    jobType: z.array(z.string()).optional().default([]),
    jobGeo: z.string().optional().default(""),
    jobLevel: z.string().optional().default(""),
    jobExcerpt: z.string().optional().default(""),
});

export const jobicyResponseSchema = z.object({
    jobs: z.array(jobicyJobSchema),
});

export type JobicyApiResponseZod = z.infer<typeof jobicyResponseSchema>;