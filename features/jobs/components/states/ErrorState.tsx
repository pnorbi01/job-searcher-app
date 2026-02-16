"use client";

import { InfoIcon, RefreshIcon } from "@/assets/icons/Icons";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import type { ErrorState } from "@/features/jobs/components/states/types";

export default function ErrorState({ message, onRetry }: ErrorState) {
    return (
        <div className="flex flex-col justify-start items-center gap-y-6 pt-6 md:pt-3 pb-16 md:pb-section px-4 md:px-6 w-full max-w-7xl mx-auto">
            <div className="flex flex-col justify-start items-center gap-y-2">
                <InfoIcon color="#000000" />
                <div className="flex flex-col justify-start items-center">
                    <h5 className="text-base-black text-responsive-h5 font-semibold">Something went wrong</h5>
                    <p className="text-muted-foreground font-normal text-sm leading-lh-sm text-center">{message}</p>
                </div>
            </div>
            <PrimaryButton
                title="Try again now"
                onClick={onRetry}
                showIcon
                iconAlignment="right"
                icon={<RefreshIcon color="#FFFFFF" />}
            />
        </div>
    );
}
