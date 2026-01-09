import { queryOptions } from "@tanstack/react-query";
import { dashboardCard } from "../services/dashboard.service";

export function useDashboard() {
    return queryOptions({
        queryKey: ['dashboard'],
        queryFn: dashboardCard,
    })
}