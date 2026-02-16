import type { Job, JobBadgeVariant } from "@/features/jobs/types";

export type JobAssignments = {
    highlightedIds: Set<Job["id"]>;
    badgesById: Map<Job["id"], JobBadgeVariant>;
};

export function getRandomAssignmentsById(jobIds: Job["id"][]): JobAssignments {
    const count = jobIds.length;

    if (count === 0) {
        return {
            highlightedIds: new Set<Job["id"]>(),
            badgesById: new Map<Job["id"], JobBadgeVariant>(),
        };
    }

    const highlightCount = Math.min(2, count);

    const highlightedIds = new Set<Job["id"]>();
    while (highlightedIds.size < highlightCount) {
        const idx = Math.floor(Math.random() * count);
        highlightedIds.add(jobIds[idx]);
    }

    const badgesById = new Map<Job["id"], JobBadgeVariant>();
    for (const id of highlightedIds) {
        badgesById.set(id, Math.random() < 0.5 ? "trending" : "recommended");
    }

    return { highlightedIds, badgesById };
}