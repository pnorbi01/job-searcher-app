import type { LinkButton } from "@/components/ui/buttons/types";

export default function LinkButtonLarge({
    title, isHighlighted, href, target, rel, showIcon, icon, iconAlignment, ariaLabel
}: LinkButton) {

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            aria-label={ariaLabel}
            className={`flex flex-row justify-center items-center gap-2 py-2 px-6 rounded-md h-[40px] min-h-[40px] w-full md:w-fit ${isHighlighted ? "bg-blue-50" : "bg-base-primary"}`}
        >
            {showIcon && icon && iconAlignment === "left" && icon}
            <span className={`font-medium tracking-[0] text-sm leading-lh-sm align-middle ${isHighlighted ? "text-badge-blue-950" : "text-primary-foreground"}`}>{title}</span>
            {showIcon && icon && iconAlignment === "right" && icon}
        </a>
    );
}