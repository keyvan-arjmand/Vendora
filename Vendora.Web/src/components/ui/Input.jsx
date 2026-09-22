// ============================================
// SPICA — Input (with optional icon)
// ============================================

export default function Input({ icon: Icon = null, className = '', ...props }) {
    if (Icon) {
        return (
            <div
                className={[
                    'flex items-center gap-2 h-10 px-3 rounded-md',
                    'bg-[var(--sp-surface)] border border-[var(--sp-border)]',
                    'transition-all duration-200',
                    'focus-within:border-[var(--sp-primary)] focus-within:shadow-[0_0_0_3px_rgba(79,140,255,.15)]',
                    className,
                ].join(' ')}
            >
                <Icon size={16} className="text-[var(--sp-text-3)] flex-none" />
                <input
                    className="flex-1 min-w-0 bg-transparent outline-none text-[13px] text-[var(--sp-text)] placeholder:text-[var(--sp-text-3)]"
                    {...props}
                />
            </div>
        );
    }

    return (
        <input
            className={[
                'h-10 px-3.5 rounded-md w-full',
                'bg-[var(--sp-surface)] border border-[var(--sp-border)]',
                'text-[13px] text-[var(--sp-text)] placeholder:text-[var(--sp-text-3)]',
                'outline-none transition-all duration-200',
                'focus:border-[var(--sp-primary)] focus:shadow-[0_0_0_3px_rgba(79,140,255,.15)]',
                className,
            ].join(' ')}
            {...props}
        />
    );
}