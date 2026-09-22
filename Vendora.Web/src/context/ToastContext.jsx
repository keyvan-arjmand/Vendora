import { createContext, useCallback, useContext, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const push = useCallback((message, type = 'success') => {
        const id = Date.now() + Math.random();
        setToasts((t) => [...t, { id, message, type }]);
        setTimeout(() => {
            setToasts((t) => t.filter((x) => x.id !== id));
        }, 3200);
    }, []);

    const success = useCallback((m) => push(m, 'success'), [push]);
    const error = useCallback((m) => push(m, 'error'), [push]);

    return (
        <ToastContext.Provider value={{ push, success, error }}>
            {children}

            {/* Toast container */}
            <div className="fixed bottom-6 start-6 z-[400] flex flex-col gap-2.5 max-w-[380px]">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-md text-[13px] font-medium text-white animate-fadeUp"
                        style={{
                            background: 'linear-gradient(160deg,#0B1220 0%,#111A2E 100%)',
                            boxShadow: '0 12px 32px -6px rgba(11,18,32,.4)',
                            border: '1px solid rgba(255,255,255,.06)',
                        }}
                    >
                        {t.type === 'error' ? (
                            <AlertCircle size={18} className="text-red-400 flex-none" />
                        ) : (
                            <CheckCircle2 size={18} className="text-emerald-400 flex-none" />
                        )}
                        <span>{t.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
}