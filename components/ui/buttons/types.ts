export interface PrimaryButton {
    title: string;
    onClick: () => void;
    showIcon?: boolean;
    icon?: React.ReactNode;
    iconAlignment?: "left" | "right";
}

export interface SecondaryButton {
    title: string;
    onClick: () => void;
}

export interface LinkButton {
    title: string;
    href: string;
    isHighlighted?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
    iconAlignment?: "left" | "right";
    ariaLabel?: string;
}