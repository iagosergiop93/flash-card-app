export interface Interceptor {
    intercept(req: any): void;
}