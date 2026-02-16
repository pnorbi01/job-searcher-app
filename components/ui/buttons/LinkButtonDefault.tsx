import type { LinkButton } from "@/components/ui/buttons/types";

export default function LinkButtonDefault({
    title, href, target, rel, showIcon, icon, iconAlignment, ariaLabel
}: LinkButton) {

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            aria-label={ariaLabel}
            className="flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-md h-[36px] min-h-[36px] bg-base-primary transition-all duration-700 hover:bg-base-primary-hover"
        >
            {showIcon && icon && iconAlignment === "left" && (
                <span className="hidden lg:inline-flex">{icon}</span>
            )}
            <span className="font-medium tracking-[0] text-sm leading-lh-sm align-middle text-primary-foreground">{title}</span>
            {showIcon && icon && iconAlignment === "right" && (
                <span className="hidden lg:inline-flex">{icon}</span>
            )}
        </a>
    );
}