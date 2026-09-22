import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';
import { conversations } from '@/mocks/conversations';

function aiBadge(status) {
    if (status === 'review') {
        return (
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                  style={{ color:'var(--sp-warning)', background:'rgba(245,158,11,.1)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        نیازمند بررسی
      </span>
        );
    }
    if (status === 'human') {
        return (
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                  style={{ color:'var(--sp-text-2)', background:'var(--sp-surface-2)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        پاسخ انسانی
      </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
              style={{ color:'var(--sp-primary-dark)', background:'rgba(79,140,255,.1)' }}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      Spica فعال
    </span>
    );
}

export default function RecentConversations({ limit = 3 }) {
    const items = conversations.slice(0, limit);

    return (
        <div
            className="p-5 rounded-lg"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">
                    آخرین گفتگوها
                </h3>
                <Link
                    to="/conversations"
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--sp-primary)] hover:underline"
                >
                    مشاهده همه
                    <ArrowLeft size={13} />
                </Link>
            </div>

            <div className="flex flex-col">
                {items.map((c, i) => (
                    <Link
                        key={c.id}
                        to="/conversations"
                        className="flex items-center gap-3 py-3 -mx-2 px-2 rounded-md transition-colors hover:bg-[var(--sp-surface-2)]"
                        style={{
                            borderTop: i === 0 ? 'none' : '1px solid var(--sp-border)',
                        }}
                    >
                        <Avatar name={c.customer} size={38} />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[13.5px] font-semibold text-[var(--sp-text)] truncate">
                  {c.customer}
                </span>
                                <ChannelBadge channel={c.channel} size="sm" />
                            </div>
                            <div className="text-[12px] text-[var(--sp-text-2)] truncate">
                                {c.messages[c.messages.length - 1].text.replace(/\n/g, ' ')}
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 flex-none">
                            {aiBadge(c.aiStatus)}
                            <span className="text-[10.5px] text-[var(--sp-text-3)]">
                {c.updatedAt}
              </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}