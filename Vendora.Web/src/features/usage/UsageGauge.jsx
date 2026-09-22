import { fa } from '@/lib/format';

export default function UsageGauge({ used, total, label }) {
    const percent = Math.min(100, Math.round((used / total) * 100));
    const tone =
        percent >= 100
            ? 'var(--sp-danger)'
            : percent >= 90
                ? 'var(--sp-warning)'
                : 'var(--sp-primary)';

    return (
        <div>
            <div className="flex items-center justify-between mb-2 text-[12.5px]">
                <span className="text-[var(--sp-text-2)] font-medium">{label}</span>
                <span className="flex items-center gap-2">
          <strong className="font-bold text-[var(--sp-text)] tabular-nums">
            {fa(used.toLocaleString())}
          </strong>
          <span className="text-[var(--sp-text-3)] tabular-nums">
            / {fa(total.toLocaleString())}
          </span>
        </span>
            </div>
            <div className="h-2 rounded-full bg-[var(--sp-surface-2)] overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                        width: `${percent}%`,
                        background: `linear-gradient(90deg, ${tone}, ${tone}CC)`,
                    }}
                />
            </div>
            <div className="flex items-center justify-between mt-1.5 text-[11px] text-[var(--sp-text-3)]">
                <span>{fa(percent)}٪ مصرف</span>
                {percent >= 80 && (
                    <span
                        style={{
                            color: percent >= 100 ? 'var(--sp-danger)' : 'var(--sp-warning)',
                            fontWeight: 600,
                        }}
                    >
            {percent >= 100 ? 'ظرفیت تکمیل' : 'نزدیک به ظرفیت'}
          </span>
                )}
            </div>
        </div>
    );
}