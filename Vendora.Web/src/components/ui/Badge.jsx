// ============================================
// SPICA — Badge
// ============================================

export default function Badge({ children, variant = 'neutral', dot = false, size = 'md' }) {
    const variants = {
        neutral: 'bg-[var(--sp-surface-2)] text-[var(--sp-text-2)] border-[var(--sp-border)]',
        primary: 'bg-[rgba(79,140,255,.1)] text-[var(--sp-primary-dark)] border-[rgba(79,140,255,.25)]',
        success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        warning: 'bg-amber-50 text-amber-700 border-amber-200',
        danger:  'bg-red-50 text-red-600 border-red-200',
    };

    const sizes = {
        sm: 'text-[10px] px-2 py-0.5',
        md: 'text-[11.5px] px-2.5 py-1',
    };

    return (
        <span
            className={[
                'inline-flex items-center gap-1.5 font-semibold rounded-full border leading-none whitespace-nowrap',
                variants[variant],
                sizes[size],
            ].join(' ')}
        >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
            {children}
    </span>
    );
}