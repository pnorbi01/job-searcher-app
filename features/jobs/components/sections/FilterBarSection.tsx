"use client";

import { ChevronIcon } from "@/assets/icons/Icons";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import {
    INDUSTRY_LABELS,
    INDUSTRY_VALUES,
    JOB_GEO_LABELS,
    JOB_GEO_VALUES,
} from "@/features/jobs/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, type ChangeEvent } from "react";

export default function FilterBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentGeo = (searchParams.get("jobGeo") ?? "").toLowerCase();
    const currentIndustry = (searchParams.get("industry") ?? "").toLowerCase();

    const updateFilters = useCallback(
        (key: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value) params.set(key, value);
            else params.delete(key);

            router.push(`?${params.toString()}`, { scroll: false });
        },
        [router, searchParams]
    );

    const handleGeoChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            updateFilters("jobGeo", e.target.value);
        },
        [updateFilters]
    );

    const handleIndustryChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            updateFilters("industry", e.target.value);
        },
        [updateFilters]
    );

    const clearAllFilters = useCallback(() => {
        router.push("/", { scroll: false });
    }, [router]);

    const hasActiveFilters = !!(currentGeo || currentIndustry);

    return (
        <section id="jobs" className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-end w-full my-3 lg:my-6 max-md:gap-y-4 z-20 max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-start items-start gap-4 max-md:w-full">
                <div className="flex flex-col justify-start items-start gap-1 max-md:w-full">
                    <label
                        htmlFor="filter-geo"
                        className="leading-lh-xs text-xs font-normal tracking-[0] text-base-black px-2 gap-[10px] w-full"
                    >
                        Company location:
                    </label>

                    <div className="relative w-full md:w-[228px] min-w-[228px]">
                        <select
                            id="filter-geo"
                            className="w-full cursor-pointer rounded-md border border-base-input bg-base-white py-2 px-4 shadow-xs tracking-[0] leading-lh-sm text-sm text-base-black font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-base-input"
                            value={currentGeo}
                            onChange={handleGeoChange}
                        >
                            <option
                                value=""
                                className="tracking-[0] leading-lh-sm text-sm text-base-black font-medium"
                            >
                                Worldwide
                            </option>
                            {JOB_GEO_VALUES.map((geo) => (
                                <option
                                    key={geo}
                                    value={geo}
                                    className="tracking-[0] leading-lh-sm text-sm text-base-black font-medium"
                                >
                                    {JOB_GEO_LABELS[geo]}
                                </option>
                            ))}
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base-black/60">
                            <ChevronIcon className="opacity-50" />
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-1 max-md:w-full">
                    <label
                        htmlFor="filter-industry"
                        className="leading-lh-xs text-xs font-normal tracking-[0] text-base-black px-2 gap-[10px] w-full"
                    >
                        Industries:
                    </label>

                    <div className="relative w-full md:w-[228px] min-w-[228px]">
                        <select
                            id="filter-industry"
                            className="w-full cursor-pointer rounded-md border border-base-input bg-base-white py-2 px-4 shadow-xs tracking-[0] leading-lh-sm text-sm text-base-black font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-base-input"
                            value={currentIndustry}
                            onChange={handleIndustryChange}
                        >
                            <option value="" className="tracking-[0] leading-lh-sm text-sm text-base-black font-medium">
                                All Industries
                            </option>
                            {INDUSTRY_VALUES.map((industry) => (
                                <option key={industry} value={industry} className="tracking-[0] leading-lh-sm text-sm text-base-black font-medium">
                                    {INDUSTRY_LABELS[industry]}
                                </option>
                            ))}
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base-black/60">
                            <ChevronIcon className="opacity-50" />
                        </span>
                    </div>
                </div>
            </div>

            {hasActiveFilters && (
                <SecondaryButton title="Reset filters" onClick={clearAllFilters} />
            )}
        </section>
    );
}