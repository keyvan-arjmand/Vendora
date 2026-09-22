import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage('spica_user', null);
    const [onboarded, setOnboarded] = useLocalStorage('spica_onboarded', false);
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setBooted(true), 300);
        return () => clearTimeout(t);
    }, []);

    const login = useCallback((email) => {
        const u = {
            id: 'u1',
            name: email?.split('@')[0] || 'کاربر',
            email: email || 'ali@spica.ir',
        };
        setUser(u);
        return u;
    }, [setUser]);

    const signup = useCallback((data) => {
        const u = {
            id: 'u1',
            name: data.name || 'کاربر',
            email: data.email || 'user@spica.ir',
            storeName: data.storeName || 'فروشگاه من',
        };
        setUser(u);
        setOnboarded(false);
        return u;
    }, [setUser, setOnboarded]);

    const logout = useCallback(() => {
        setUser(null);
        setOnboarded(false);
    }, [setUser, setOnboarded]);

    const completeOnboarding = useCallback(() => {
        setOnboarded(true);
    }, [setOnboarded]);

    return (
        <AuthContext.Provider
            value={{
                user,
                onboarded,
                booted,
                isAuthenticated: !!user,
                login,
                signup,
                logout,
                completeOnboarding,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}