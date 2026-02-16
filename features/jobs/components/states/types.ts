export interface ErrorState {
    message: string;
    onRetry: () => void;
}

export interface EmptyState {
    hasFilters: boolean;
}