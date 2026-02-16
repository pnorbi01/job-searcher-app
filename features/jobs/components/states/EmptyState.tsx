"use client";

import { SearchMinusIcon } from "@/assets/icons/Icons";
import type { EmptyState } from "@/features/jobs/components/states/types";

export default function EmptyState({ hasFilters }: EmptyState) {
    return (
        <div className="flex flex-col justify-start items-center gap-y-6 pt-6 md:pt-3 pb-16 md:pb-section px-4 md:px-6 w-full max-w-7xl mx-auto">
            <div className="flex flex-col justify-start items-center gap-y-2">
                <SearchMinusIcon color="#000000" />
                <div className="flex flex-col justify-start items-center">
                    <h5 className="text-base-black text-responsive-h5 font-semibold text-center">
                        {hasFilters ? "No jobs match your filters" : "No jobs available"}
                    </h5>
                    <p className="text-muted-foreground font-normal text-sm leading-lh-sm text-center">
                        {hasFilters
                            ? "Try adjusting your location or industry filters to see more results."
                            : "There are currently no job listings available. Please check back later."}
                    </p>
                </div>
            </div>
        </div>
    );
}
