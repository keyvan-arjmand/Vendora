import { money } from '@/lib/format';

export default function MoneyValue({ value, size = 'md', unit = false }) {
    const sizes = {
        sm: { num:'text-[13px]', unit:'text-[10px]' },
        md: { num:'text-[15px]', unit:'text-[11px]' },
        lg: { num:'text-[22px]', unit:'text-[12px]' },
        xl: { num:'text-[28px]', unit:'text-[13px]' },
    };
    const s = sizes[size] || sizes.md;

    return (
        <span className="inline-flex items-baseline gap-1 tabular-nums">
      <strong className={`${s.num} font-extrabold text-[var(--sp-text)] tracking-tight`}>
        {money(value)}
      </strong>
            {unit && (
                <span className={`${s.unit} text-[var(--sp-text-3)] font-medium`}>تومان</span>
            )}
    </span>
    );
}