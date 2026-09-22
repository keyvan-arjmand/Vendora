import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fa } from '@/lib/format';
import { useAgent } from '@/context/AgentContext';

export default function AiCard() {
    const { active, name, tone } = useAgent();

    return (
        <div
            className="p-5 rounded-lg relative overflow-hidden flex flex-col gap-3.5 h-full"
            style={{
                background:
                    'linear-gradient(160deg, var(--sp-surface) 0%, rgba(79,140,255,.03) 60%, rgba(102,217,255,.05) 100%)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            {/* Glow */}
            <div
                className="absolute -top-16 -start-16 w-52 h-52 rounded-full pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, rgba(79,140,255,.12), transparent 65%)',
                }}
            />

            <div className="flex items-center gap-3 relative">
                <div
                    className="w-11 h-11 rounded-xl grid place-items-center text-white relative flex-none"
                    style={{
                        background: 'var(--sp-gradient)',
                        boxShadow:
                            '0 0 0 1px rgba(79,140,255,.2), 0 8px 22px -4px rgba(79,140,255,.45), inset 0 1px 0 rgba(255,255,255,.25)',
                    }}
                >
                    <Sparkles size={20} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-[14.5px] font-bold text-[var(--sp-text)]">{name}</div>
                    <div className="text-[12px] text-[var(--sp-text-2)]">
                        فروشنده هوش مصنوعی شما
                    </div>
                </div>
                <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{
                        color: active ? 'var(--sp-success)' : 'var(--sp-danger)',
                        background: active
                            ? 'rgba(16,185,129,.1)'
                            : 'rgba(239,68,68,.1)',
                    }}
                >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {active ? 'فعال' : 'غیرفعال'}
        </span>
            </div>

            <div
                className="flex items-center gap-3 p-3.5 rounded-xl"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                }}
            >
                <div className="text-[22px] font-extrabold tracking-tight text-[var(--sp-primary)] tabular-nums">
                    {fa(94)}
                </div>
                <div className="text-[12px] text-[var(--sp-text-2)] leading-snug">
                    گفتگو توسط Spica
                    <br />
                    مدیریت شد
                </div>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-dashed border-[var(--sp-border)] text-[12.5px]">
                <span className="text-[var(--sp-text-2)]">کانال‌های متصل</span>
                <strong className="text-[var(--sp-text)] font-semibold">{fa(4)} کانال</strong>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-dashed border-[var(--sp-border)] text-[12.5px]">
                <span className="text-[var(--sp-text-2)]">لحن گفتگو</span>
                <strong className="text-[var(--sp-text)] font-semibold">{tone}</strong>
            </div>

            <Link
                to="/agent"
                className="mt-auto inline-flex items-center justify-center gap-2 h-10 rounded-md text-[13px] font-semibold text-[var(--sp-text-2)] transition-all hover:text-[var(--sp-text)]"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                }}
            >
                تنظیمات فروشنده
                <ArrowLeft size={15} />
            </Link>
        </div>
    );
}