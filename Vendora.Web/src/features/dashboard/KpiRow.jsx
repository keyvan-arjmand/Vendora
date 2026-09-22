import { MessageSquare, Sparkles, PackageCheck, Target, TrendingUp } from 'lucide-react';
import { fa } from '@/lib/format';

function Kpi({ label, value, trend, foot, icon: Icon, tone = 'primary', suffix = '' }) {
    const tones = {
        primary: { bg:'rgba(79,140,255,.1)',  color:'var(--sp-primary)' },
        green:   { bg:'rgba(16,185,129,.1)',  color:'var(--sp-success)' },
        amber:   { bg:'rgba(245,158,11,.1)',  color:'var(--sp-warning)' },
        violet:  { bg:'rgba(139,92,246,.1)',  color:'#8B5CF6' },
    };
    const t = tones[tone] || tones.primary;

    return (
        <div
            className="relative p-5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="flex items-center justify-between mb-3.5">
                <div
                    className="w-10 h-10 rounded-xl grid place-items-center"
                    style={{ background: t.bg, color: t.color }}
                >
                    <Icon size={19} />
                </div>
                {trend && (
                    <span
                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                            color: trend.startsWith('-') ? 'var(--sp-danger)' : 'var(--sp-success)',
                            background: trend.startsWith('-')
                                ? 'rgba(239,68,68,.08)'
                                : 'rgba(16,185,129,.08)',
                        }}
                    >
            <TrendingUp size={11} strokeWidth={2.6} />
                        {trend}
          </span>
                )}
            </div>
            <div className="text-[12px] text-[var(--sp-text-2)] font-medium mb-1">{label}</div>
            <div className="text-[26px] font-extrabold tracking-tight text-[var(--sp-text)] leading-tight tabular-nums">
                {value}
                {suffix && <span className="text-[16px] ms-1 text-[var(--sp-text-3)]">{suffix}</span>}
            </div>
            {foot && (
                <div className="text-[11.5px] text-[var(--sp-text-3)] mt-1.5">{foot}</div>
            )}
        </div>
    );
}

export default function KpiRow({ data }) {
    const {
        conversations = 128,
        automated = 94,
        orders = 5,
        conversion = 16.4,
    } = data || {};

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Kpi
                icon={MessageSquare}
                label="گفتگوهای فعال"
                value={fa(conversations)}
                trend="۱۲٪"
                foot="در ۵ کانال"
            />
            <Kpi
                icon={Sparkles}
                label="مدیریت‌شده توسط Spica"
                value={fa(automated)}
                trend="۷۳٪"
                tone="violet"
                foot={`از ${fa(conversations)} گفتگو`}
            />
            <Kpi
                icon={PackageCheck}
                label="سفارش‌های امروز"
                value={fa(orders)}
                trend="۸٪"
                tone="green"
                foot="آماده پردازش"
            />
            <Kpi
                icon={Target}
                label="نرخ تبدیل"
                value={fa(conversion)}
                suffix="٪"
                trend="۲.۱٪"
                tone="amber"
                foot="بهبود نسبت به هفته قبل"
            />
        </div>
    );
}