import { Star } from 'lucide-react';

export default function LoadingScreen() {
    return (
        <div
            className="fixed inset-0 grid place-items-center z-[500]"
            style={{ background: 'var(--sp-bg)' }}
        >
            <div className="flex flex-col items-center gap-4">
                <div
                    className="w-16 h-16 rounded-2xl grid place-items-center text-white animate-pulse"
                    style={{
                        background: 'var(--sp-gradient)',
                        boxShadow: '0 12px 32px -8px rgba(79,140,255,.5)',
                    }}
                >
                    <Star size={28} strokeWidth={2.4} fill="currentColor" />
                </div>
                <div className="text-[13px] font-semibold text-[var(--sp-text-2)]">
                    Spica در حال آماده‌سازی...
                </div>
            </div>
        </div>
    );
}