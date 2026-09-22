import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Drawer({ open, onClose, title, subtitle, children, footer }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        if (open) {
            document.addEventListener('keydown', onKey);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-[180]"
                style={{
                    background: 'rgba(11,18,32,.4)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    animation: 'fadeIn .2s ease',
                }}
                onClick={onClose}
            />
            <aside
                className="fixed top-0 start-0 bottom-0 z-[190] w-full max-w-[500px] flex flex-col"
                style={{
                    background: 'var(--sp-surface)',
                    boxShadow: '0 24px 56px -12px rgba(11,18,32,.3)',
                    animation: 'slideIn .3s cubic-bezier(.16,1,.3,1)',
                }}
            >
                <div
                    className="flex-none flex items-start justify-between gap-3 px-5 py-5"
                    style={{ borderBottom: '1px solid var(--sp-border)' }}
                >
                    <div>
                        <h3 className="text-[15px] font-bold text-[var(--sp-text)]">
                            {title}
                        </h3>
                        {subtitle && (
                            <div className="text-[11.5px] text-[var(--sp-text-3)] mt-1">
                                {subtitle}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-md grid place-items-center text-[var(--sp-text-2)] transition-colors hover:bg-[var(--sp-surface-2)]"
                        aria-label="بستن"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5">{children}</div>

                {footer && (
                    <div
                        className="flex-none p-4 flex items-center gap-2 justify-end"
                        style={{
                            background: 'var(--sp-surface-2)',
                            borderTop: '1px solid var(--sp-border)',
                        }}
                    >
                        {footer}
                    </div>
                )}
            </aside>

            <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn { from { transform: translateX(-100%) } to { transform: none } }
      `}</style>
        </>
    );
}