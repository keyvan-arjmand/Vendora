// ============================================
// SPICA — Chip (filter pills)
// ============================================

export default function Chip({ children, active = false, icon: Icon = null, onClick, ...props }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                'inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[12.5px] font-medium',
                'transition-all duration-200 whitespace-nowrap border',
                active
                    ? 'bg-[var(--sp-primary)] text-white border-transparent shadow-[0_3px_10px_-3px_rgba(79,140,255,.5)]'
                    : 'bg-[var(--sp-surface)] text-[var(--sp-text-2)] border-[var(--sp-border)] hover:bg-[var(--sp-surface-2)] hover:text-[var(--sp-text)]',
            ].join(' ')}
            {...props}
        >
            {Icon && <Icon size={14} />}
            {children}
        </button>
    );
}