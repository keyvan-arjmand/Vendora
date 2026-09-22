import { Sparkles, Search, Package, DollarSign, Tag } from 'lucide-react';
import { fa } from '@/lib/format';

function ActionRow({ icon: Icon, label, status = 'done' }) {
    const colors = {
        done: { bg: 'rgba(16,185,129,.12)', color: 'var(--sp-success)' },
        pending: { bg: 'var(--sp-surface-2)', color: 'var(--sp-text-3)' },
        error: { bg: 'rgba(239,68,68,.12)', color: 'var(--sp-danger)' },
    };
    const t = colors[status];

    return (
        <div className="flex items-center gap-3 py-2.5 px-3 rounded-md" style={{ background: 'var(--sp-surface-2)' }}>
            <div
                className="w-7 h-7 rounded-md grid place-items-center flex-none"
                style={{ background: t.bg, color: t.color }}
            >
                <Icon size={14} />
            </div>
            <span className="text-[12.5px] font-medium flex-1 text-[var(--sp-text)]">{label}</span>
            <span className="text-[10.5px] font-bold" style={{ color: t.color }}>
        {status === 'done' ? '✓ انجام شد' : status === 'error' ? '✗ خطا' : '...'}
      </span>
        </div>
    );
}

export default function AiResultPanel({ result }) {
    if (!result) {
        return (
            <div
                className="p-6 rounded-lg flex flex-col items-center justify-center text-center h-full"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px dashed var(--sp-border-2)',
                    minHeight: 300,
                }}
            >
                <div
                    className="w-14 h-14 rounded-2xl grid place-items-center mb-3"
                    style={{ background: 'var(--sp-surface-2)', color: 'var(--sp-text-3)' }}
                >
                    <Sparkles size={24} />
                </div>
                <div className="text-[14px] font-bold text-[var(--sp-text)] mb-1">
                    نتیجه اینجا نمایش داده می‌شود
                </div>
                <p className="text-[12px] text-[var(--sp-text-2)] max-w-[280px] leading-relaxed">
                    یک پیام نمونه وارد کنید یا روی یکی از نمونه‌ها کلیک کنید.
                </p>
            </div>
        );
    }

    const { intent, product, size, color, budget, confidence, actions } = result;

    return (
        <div
            className="p-5 rounded-lg animate-fadeUp"
            style={{
                background:
                    'linear-gradient(160deg, var(--sp-surface) 0%, rgba(79,140,255,.03) 100%)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            {/* Summary */}
            <div
                className="p-3.5 rounded-xl mb-4 flex items-start gap-3"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(79,140,255,.06), rgba(102,217,255,.08))',
                    border: '1px solid rgba(79,140,255,.2)',
                }}
            >
                <div
                    className="w-8 h-8 rounded-md grid place-items-center flex-none"
                    style={{ background: 'var(--sp-gradient)', color: '#fff' }}
                >
                    <Sparkles size={15} />
                </div>
                <div className="text-[12.5px] leading-relaxed" style={{ color: 'var(--sp-primary-dark)' }}>
                    <strong className="block mb-0.5">خلاصه Spica</strong>
                    مشتری به دنبال {product} با سایز {fa(size)} است.
                </div>
            </div>

            {/* Extracted fields */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                اطلاعات استخراج‌شده
            </div>
            <div
                className="p-3 rounded-xl mb-4"
                style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
            >
                <Row label="Intent" value={intent} />
                <Row label="Product" value={product} />
                <Row label="Size" value={fa(size)} />
                <Row label="Color" value={color} />
                <Row label="Budget" value={`${fa(budget.toLocaleString())} تومان`} />
            </div>

            {/* Confidence */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                اطمینان
            </div>
            <div className="flex items-center gap-2 mb-5">
                <div className="flex-1 h-1.5 rounded-full bg-[var(--sp-surface-2)] overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{ width: `${confidence}%`, background: 'var(--sp-gradient)' }}
                    />
                </div>
                <span className="text-[12px] font-bold tabular-nums" style={{ color: 'var(--sp-primary)' }}>
          {fa(confidence)}٪
        </span>
            </div>

            {/* Actions */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                اقدامات Spica
            </div>
            <div className="flex flex-col gap-2">
                {(actions || []).map((a, i) => (
                    <ActionRow key={i} icon={a.icon} label={a.label} status={a.status} />
                ))}
            </div>
        </div>
    );
}

function Row({ label, value }) {
    return (
        <div
            className="flex items-center justify-between py-2 text-[12.5px]"
            style={{ borderBottom: '1px dashed var(--sp-border)' }}
        >
            <span className="text-[var(--sp-text-2)]">{label}</span>
            <strong className="font-semibold text-[var(--sp-text)]">{value}</strong>
        </div>
    );
}