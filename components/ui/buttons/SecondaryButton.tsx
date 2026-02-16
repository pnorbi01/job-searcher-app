"use client";

import type { SecondaryButton } from "@/components/ui/buttons/types";

export default function SecondaryButton({ title, onClick }: SecondaryButton) {

    return (
        <button
            className="flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-md h-[36px] min-h-[36px] bg-transparent cursor-pointer transition-all duration-700 hover:bg-base-input"
            onClick={onClick}
            type="button"
        >
            <span className="font-medium tracking-[0] text-sm leading-lh-sm align-middle">{title}</span>
        </button>
    );
}