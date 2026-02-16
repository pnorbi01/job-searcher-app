export interface Job {
    id: number;
    url: string;
    title: string;
    company: string;
    companyLogo: string;
    industries: string[];
    types: string[];
    geo: string;
    level: string;
    excerpt: string;
}

export type JobBadgeVariant = "trending" | "recommended";