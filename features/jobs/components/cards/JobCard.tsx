import LinkButton from "@/components/ui/buttons/LinkButtonLarge";
import JobBadge from "@/features/jobs/components/JobBadge";
import JobMeta from "@/features/jobs/components/JobMeta";
import type { JobCardProps } from "@/features/jobs/components/cards/types";

export default function JobCard({
    job,
    isHighlighted = false,
    badge = null,
}: JobCardProps) {

    const showBadge = isHighlighted && !!badge;

    return (
        <article
            className={`relative flex flex-col justify-between items-start p-4 md:p-6 rounded-xl col-span-1 z-20 gap-y-4 animate-fadeInUp ${isHighlighted ? "[background-image:var(--card-highlighted-linear)]" : "bg-neutral-50 border border-neutral-200"}`}
        >
            <div className="flex flex-col justify-start items-start gap-y-4">
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="w-[48px] h-[48px] min-w-[48px] rounded-md overflow-hidden">
                        {job.companyLogo ? (
                            <img
                                src={job.companyLogo}
                                alt={`${job.company} logo`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        ) : (
                            <div className="job-card-logo-placeholder">
                                {job.company.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    {showBadge ? <JobBadge variant={badge} /> : null}
                </div>
                <div className="flex flex-col justify-start items-start gap-y-2">
                    <h3 className={`min-w-0 line-clamp-2 break-words font-bold leading-lh-lg text-lg tracking-[0] ${isHighlighted ? "text-base-white" : "text-base-black"}`}>{job.title}</h3>
                    <p className={`font-semibold text-sm leading-lh-sm tracking-[0] ${isHighlighted ? "text-base-white" : "text-neutral-500"}`}>{job.company}</p>
                </div>
                <JobMeta types={job.types} level={job.level} geo={job.geo} isHighlighted={isHighlighted} />
                <p className={`overflow-hidden text-sm leading-lh-sm font-normal tracking-[0] line-clamp-3 ${isHighlighted ? "text-base-white" : "text-base-black"}`}>{job.excerpt}</p>
            </div>

            <div className="flex justify-end items-center w-full">
                <LinkButton
                    title="View job"
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View job"
                    isHighlighted={isHighlighted}
                />
            </div>
        </article>
    );
}
