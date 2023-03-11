export const skipItems = (itemsPerPage: number, page?: number): number => ((page ?? 1) - 1) * itemsPerPage;
