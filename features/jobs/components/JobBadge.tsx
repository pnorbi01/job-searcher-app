import type { JobBadgeVariant } from "@/features/jobs/types";
import coolIcon from "@/assets/images/badge/cool.svg";
import Image from "next/image";

type JobBadgeProps = {
    variant: JobBadgeVariant;
};

export default function JobBadge({ variant }: JobBadgeProps) {
    return (
        <div className="flex justify-center items-center rounded-full p-2 border gap-1 bg-blue-50 border-base-border">
            <Image src={coolIcon} alt={`${variant}`} width={16} height={16} />
            <span className="font-medium text-xs leading-lh-xs tracking-[0] text-badge-blue-950">
                {variant === "trending" ? (
                    <>
                        Trending
                    </>
                ) : (
                    <>
                        Recommended
                    </>
                )}
            </span>
        </div>
    );
}