"use client";

import GradientDecoration from "@/components/ui/decorations/GradientDecoration";
import { fetchJobs } from "@/features/jobs/api/fetchJobs";
import JobCard from "@/features/jobs/components/cards/JobCard";
import { JobListSkeleton } from "@/features/jobs/components/skeletons/JobCardSkeleton";
import EmptyState from "@/features/jobs/components/states/EmptyState";
import ErrorState from "@/features/jobs/components/states/ErrorState";
import { getRandomAssignmentsById } from "@/features/jobs/lib/assignments";
import type { Job } from "@/features/jobs/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function JobList() {
    const searchParams = useSearchParams();
    const jobGeo = searchParams.get("jobGeo") ?? undefined;
    const industry = searchParams.get("industry") ?? undefined;

    const { data: jobs, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["jobs", { jobGeo, industry }],
        queryFn: ({ signal }) => fetchJobs({ jobGeo, industry, signal }),
    });

    const jobIds: Job["id"][] = (jobs ?? []).map((j) => j.id);

    const { highlightedIds, badgesById } = useMemo(
        () => getRandomAssignmentsById(jobIds),
        [jobIds]
    );

    if (isLoading) return <JobListSkeleton />;

    if (isError) {
        return (
            <ErrorState
                message={error instanceof Error ? error.message : "An unexpected error occurred."}
                onRetry={() => refetch()}
            />
        );
    }

    if (!jobs || jobs.length === 0) {
        return <EmptyState hasFilters={!!(jobGeo || industry)} />;
    }

    return (
        <div className="relative w-full">
            {jobs.length >= 8 && <GradientDecoration className="md:hidden top-0" />}

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-4 pt-6 lg:pt-3 pb-16 lg:pb-section relative z-20 max-w-7xl mx-auto px-4 md:px-6">
                {jobs.map((job) => {

                    const isHighlighted = highlightedIds.has(job.id);
                    const badge = isHighlighted ? (badgesById.get(job.id) ?? null) : null;

                    return (
                        <JobCard
                            key={job.id}
                            job={job}
                            isHighlighted={isHighlighted}
                            badge={badge}
                        />
                    );
                })}
            </section>

            <GradientDecoration className="bottom-0" />
        </div>
    );
}