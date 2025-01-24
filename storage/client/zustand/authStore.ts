import { create } from 'zustand';
import Cookies from 'js-cookie';

interface UIAuthState {
    authenticated: boolean;
    authenticate: () => void;
    deauthenticate: () => void;
}

export const useUIAuthStore = create<UIAuthState>()((set) => ({
    authenticated: false,
    authenticate: () => set({ authenticated: true }),
    deauthenticate: () => set({ authenticated: false })
}))