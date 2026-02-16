export type IconProps = {
    width?: number;
    height?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
};

export const iconDefaults = {
    width: 24,
    height: 24,
    strokeWidth: 1,
    color: "currentColor",
} as const;