import type { IconProps } from "@/assets/icons/common/props/iconProps";
import { iconDefaults } from "@/assets/icons/common/props/iconProps";

export const ChevronIcon = ({
    width = 8,
    height = 12,
    strokeWidth = 1.33,
    color = "black",
    className,
}: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M0.664993 7.99831L3.99833 11.3316L7.33166 7.99831M0.664993 3.99831L3.99833 0.664978L7.33166 3.99831"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const ArrowDownIcon = ({
    width = 11,
    height = 11,
    strokeWidth = 1.33,
    color = "white",
    className,
}: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M5.33164 0.664993V9.99833M5.33164 9.99833L9.99831 5.33166M5.33164 9.99833L0.664978 5.33166"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const InfoIcon = ({
    width = 64,
    height = 64,
    strokeWidth = 1.5,
    color = iconDefaults.color,
    className,
}: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
        />
        <line
            x1="12"
            y1="8"
            x2="12"
            y2="12"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <line
            x1="12"
            y1="16"
            x2="12.01"
            y2="16"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const RefreshIcon = ({
    width = 16,
    height = 16,
    strokeWidth = 2,
    color = iconDefaults.color,
    className,
}: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <polyline
            points="23 4 23 10 17 10"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const SearchMinusIcon = ({
    width = 64,
    height = 64,
    strokeWidth = 1.5,
    color = iconDefaults.color,
    className,
}: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
        />
        <line
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <line
            x1="8"
            y1="11"
            x2="14"
            y2="11"
            stroke={color ?? iconDefaults.color}
            strokeWidth={strokeWidth ?? iconDefaults.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
