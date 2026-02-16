import type { Job, JobBadgeVariant } from "@/features/jobs/types";

export interface JobCardProps {
    job: Job;
    isHighlighted?: boolean;
    badge?: JobBadgeVariant | null;
}