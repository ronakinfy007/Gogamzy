export type ActionResponse<T> = {
    success: boolean;
    errors?: Record<string, string[]>;
    data?: T;
} | null;
