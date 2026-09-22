import { fa } from '@/lib/format';

const STAGES = [
    { label: 'گفتگو',       value: 128, color: 'var(--sp-primary)' },
    { label: 'واجد شرایط',  value: 74,  color: '#3D7BFF' },
    { label: 'علاقه‌مند',   value: 42,  color: '#5CA3FF' },
    { label: 'سفارش',       value: 21,  color: 'var(--sp-accent)' },
];

export default function SalesFunnel() {
    const max = STAGES[0].value;

    return (
        <div
            className="p-5 rounded-lg"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="mb-5">
                <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">
                    قیف فروش
                </h3>
                <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                    از گفتگو تا سفارش
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {STAGES.map((s, i) => {
                    const pct = Math.round((s.value / max) * 100);
                    const conv =
                        i === 0 ? 100 : Math.round((s.value / STAGES[i - 1].value) * 100);

                    return (
                        <div key={s.label}>
                            <div className="flex items-center justify-between mb-1.5 text-[12.5px]">
                                <span className="text-[var(--sp-text-2)] font-medium">{s.label}</span>
                                <span className="flex items-center gap-2">
                  <strong className="font-bold text-[var(--sp-text)] tabular-nums">
                    {fa(s.value)}
                  </strong>
                                    {i > 0 && (
                                        <span className="text-[10.5px] text-[var(--sp-text-3)] tabular-nums">
                      {fa(conv)}٪
                    </span>
                                    )}
                </span>
                            </div>
                            <div className="h-2 rounded-full bg-[var(--sp-surface-2)] overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-700"
                                    style={{
                                        width: `${pct}%`,
                                        background: `linear-gradient(90deg, ${s.color}, ${s.color}CC)`,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}