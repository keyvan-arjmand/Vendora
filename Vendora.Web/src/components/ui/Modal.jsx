import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ open, onClose, title, children, footer, size = 'md' }) {
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

    const sizes = {
        sm: 'max-w-[440px]',
        md: 'max-w-[620px]',
        lg: 'max-w-[720px]',
    };

    return (
        <div
            className="fixed inset-0 z-[200] grid place-items-center p-5"
            style={{
                background: 'rgba(11,18,32,.45)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                animation: 'fadeIn .2s ease',
            }}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-full ${sizes[size]} max-h-[88vh] flex flex-col rounded-2xl overflow-hidden`}
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: '0 24px 56px -12px rgba(11,18,32,.3)',
                    animation: 'pop .28s cubic-bezier(.16,1,.3,1)',
                }}
            >
                <div
                    className="flex-none flex items-center justify-between gap-3 px-5 py-4"
                    style={{ borderBottom: '1px solid var(--sp-border)' }}
                >
                    <h3 className="text-[15px] font-bold text-[var(--sp-text)]">{title}</h3>
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
                        className="flex-none flex items-center justify-end gap-2 px-5 py-4"
                        style={{
                            background: 'var(--sp-surface-2)',
                            borderTop: '1px solid var(--sp-border)',
                        }}
                    >
                        {footer}
                    </div>
                )}
            </div>

            <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes pop { from { opacity: 0; transform: scale(.96) translateY(10px) } to { opacity: 1; transform: none } }
      `}</style>
        </div>
    );
}