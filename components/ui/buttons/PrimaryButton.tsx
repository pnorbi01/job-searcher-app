"use client";

import type { PrimaryButton } from "@/components/ui/buttons/types";

export default function PrimaryButton({ title, onClick, showIcon, icon, iconAlignment }: PrimaryButton) {

    return (
        <button
            className="flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-md h-[36px] min-h-[36px] bg-base-primary cursor-pointer transition-all duration-700 hover:bg-base-primary-hover"
            onClick={onClick}
            type="button"
        >
            {showIcon && icon && iconAlignment === "left" && icon}
            <span className="font-medium tracking-[0] text-sm leading-lh-sm align-middle text-primary-foreground">{title}</span>
            {showIcon && icon && iconAlignment === "right" && icon}
        </button>
    );
}