import { api } from "../api/api";
import type { Store, StoreResponse } from "../types/store";

export const authLoginStore = async (data: Store): Promise<StoreResponse> => {
    return await api.post('/auth/login', data);
}

export const authRegistrateStore = async (data: Store): Promise<StoreResponse> => {
    return await api.post('/auth/registrate', data);
}

export const authLogoutStore = async (): Promise<StoreResponse> => {
    return await api.post('/auth/logout');
}

export const authMeStore = async () => {
    return await api.get('/auth/me');
}