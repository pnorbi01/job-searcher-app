export interface JobicyApiJob {
    id: number;
    url: string;
    jobTitle: string;
    companyName: string;
    companyLogo: string;
    jobIndustry: string[];
    jobType: string[];
    jobGeo: string;
    jobLevel: string;
    jobExcerpt: string;
}

export interface JobicyApiResponse {
    jobs: JobicyApiJob[];
}