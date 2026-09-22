import { UserRound } from 'lucide-react';
import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';

function AIStatus({ status }) {
    const map = {
        ai: { label: 'Spica فعال', color: 'var(--sp-primary-dark)', bg: 'rgba(79,140,255,.1)' },
        human: { label: 'پاسخ انسانی', color: 'var(--sp-text-2)', bg: 'var(--sp-surface-2)' },
        review: { label: 'نیازمند بررسی', color: 'var(--sp-warning)', bg: 'rgba(245,158,11,.1)' },
    };
    const s = map[status] || map.ai;
    return (
        <span
            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
            style={{ color: s.color, background: s.bg }}
        >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {s.label}
    </span>
    );
}

export default function ThreadHeader({ conv, onCustomerClick }) {
    if (!conv) return null;

    return (
        <div
            className="flex-none flex items-center gap-3 px-5 py-3.5 relative z-10"
            style={{
                background: 'var(--sp-surface)',
                borderBottom: '1px solid var(--sp-border)',
            }}
        >
            <Avatar name={conv.customer} size={40} radius={12} />
            <div className="min-w-0 flex-1">
                <div className="text-[14px] font-bold text-[var(--sp-text)] truncate">
                    {conv.customer}
                </div>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <ChannelBadge channel={conv.channel} size="sm" />
                    <AIStatus status={conv.aiStatus} />
                    <span className="text-[11px] text-[var(--sp-text-3)]">
            {conv.handle}
          </span>
                </div>
            </div>
            <button
                onClick={onCustomerClick}
                className="w-9 h-9 rounded-md grid place-items-center text-[var(--sp-text-2)] transition-colors hover:bg-[var(--sp-surface-2)]"
                title="پروفایل مشتری"
            >
                <UserRound size={18} />
            </button>
        </div>
    );
}