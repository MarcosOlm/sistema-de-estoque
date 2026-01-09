import { useMutation } from "@tanstack/react-query";
import type { Store } from "../types/store";
import { authLoginStore, authRegistrateStore } from "../services/auth.service";
import { useNavigate } from "@tanstack/react-router";

export function useLoginAuth() {
    const navegate = useNavigate();
    return useMutation({
        mutationFn: (data: Store) => authLoginStore(data),
        onSuccess: () => {
            navegate({to: '/dashboard'});
        },
        onError: (err) => console.log('erro', err)
    })
}

export function useRegistrateAuth() {
    const navegate = useNavigate();
    return useMutation({
        mutationFn: (data: Store) => authRegistrateStore(data),
        onSuccess: () => {
            navegate({to: '/sign-in'});
        },
        onError: (err) => console.log('erro', err)
    })
}
