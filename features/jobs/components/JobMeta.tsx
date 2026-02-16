import React from "react";
import type { Job } from "@/features/jobs/types";
import { formatGeo } from "@/features/jobs/lib/format";


export type JobMetaProps = Pick<Job, "types" | "level" | "geo"> & {
    isHighlighted?: boolean;
};

function JobMetaComponent({ types, level, geo, isHighlighted = false }: JobMetaProps) {
    const hasTypes = Array.isArray(types) && types.length > 0;
    const hasLevel = Boolean(level) && level !== "Any";
    const hasGeo = Boolean(geo);

    if (!hasTypes && !hasLevel && !hasGeo) return null;

    const pillClass = `flex flex-row justify-center items-center rounded-full border px-2 py-0.5 ${isHighlighted ? "border-badge-blue-950 bg-badge-blue-200" : "border-base-border bg-white"
        }`;

    const textClass = `font-medium tracking-[0] text-xs leading-lh-xs ${isHighlighted ? "text-badge-blue-950" : "text-neutral-800"
        }`;

    return (
        <div className="flex flex-row justify-start items-start flex-wrap gap-1">
            {hasTypes && (
                <div className={pillClass}>
                    <span className={textClass}>
                        {types.join(", ")}
                    </span>
                </div>
            )}

            {hasLevel && (
                <div className={pillClass}>
                    <span className={textClass}>
                        {level}
                    </span>
                </div>
            )}

            {hasGeo && (
                <div className={pillClass} title={geo}>
                    <span className={textClass}>
                        {formatGeo(geo, 3)}
                    </span>
                </div>
            )}
        </div>
    );
}

export const JobMeta = React.memo(JobMetaComponent);
export default JobMeta;