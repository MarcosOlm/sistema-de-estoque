import { api } from "../api/api";
import type { dashboardResponse } from "../types/dashboard";

export const dashboardCard = async (): Promise<dashboardResponse> => {
    return (await api.get('product/info')).data;
}