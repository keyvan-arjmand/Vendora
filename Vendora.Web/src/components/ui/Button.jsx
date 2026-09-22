// ============================================
// SPICA — Button
// ============================================

export default function Button({
                                   children,
                                   variant = 'primary',
                                   size = 'md',
                                   icon: Icon = null,
                                   iconRight: IconRight = null,
                                   full = false,
                                   disabled = false,
                                   className = '',
                                   ...props
                               }) {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

    const sizes = {
        sm: 'h-9 px-3.5 text-[12.5px] rounded-md',
        md: 'h-10 px-4 text-[13px] rounded-md',
        lg: 'h-11 px-5 text-[13.5px] rounded-md',
        icon: 'w-10 h-10 rounded-md',
        'icon-sm': 'w-9 h-9 rounded-md',
    };

    const variants = {
        primary: `
      bg-[var(--sp-primary)] text-white
      shadow-[0_1px_2px_rgba(79,140,255,.25),0_6px_18px_-4px_rgba(79,140,255,.35)]
      hover:bg-[var(--sp-primary-dark)] hover:-translate-y-px
      hover:shadow-[0_1px_2px_rgba(37,99,235,.3),0_10px_24px_-4px_rgba(37,99,235,.5)]
      active:translate-y-0
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:ring-offset-2
    `,
        ghost: `
      bg-[var(--sp-surface)] text-[var(--sp-text-2)]
      border border-[var(--sp-border)]
      shadow-[var(--sp-shadow-soft)]
      hover:text-[var(--sp-text)] hover:border-[var(--sp-border-2)]
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:ring-offset-2
    `,
        danger: `
      bg-red-50 text-red-600 border border-red-200
      hover:bg-red-100
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300
    `,
        subtle: `
      bg-[var(--sp-surface-2)] text-[var(--sp-text-2)]
      hover:bg-[var(--sp-surface-3)] hover:text-[var(--sp-text)]
    `,
    };

    const cls = [
        base,
        sizes[size] || sizes.md,
        variants[variant] || variants.primary,
        full ? 'w-full' : '',
        className,
    ].join(' ');

    return (
        <button className={cls} disabled={disabled} {...props}>
            {Icon && <Icon size={16} />}
            {children}
            {IconRight && <IconRight size={16} />}
        </button>
    );
}