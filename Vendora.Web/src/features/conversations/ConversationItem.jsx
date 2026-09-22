import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';

function StatusBadge({ status }) {
    if (status === 'review') {
        return (
            <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ color: 'var(--sp-warning)', background: 'rgba(245,158,11,.1)' }}
            >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        بررسی
      </span>
        );
    }
    if (status === 'human') {
        return (
            <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ color: 'var(--sp-text-2)', background: 'var(--sp-surface-2)' }}
            >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        انسان
      </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
                color: 'var(--sp-primary-dark)',
                background: 'rgba(79,140,255,.1)',
            }}
        >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      Spica
    </span>
    );
}

export default function ConversationItem({ conv, active, onClick }) {
    const lastMsg = conv.messages[conv.messages.length - 1];
    const preview = lastMsg ? lastMsg.text.replace(/\n/g, ' ') : '';

    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full block text-start p-3 rounded-xl mb-0.5 transition-all duration-200 border"
            style={{
                background: active ? 'rgba(79,140,255,.08)' : 'transparent',
                borderColor: active ? 'rgba(79,140,255,.25)' : 'transparent',
            }}
            onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.background = 'var(--sp-surface-2)';
            }}
            onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = 'transparent';
            }}
        >
            <div className="flex items-center justify-between gap-2 mb-1">
        <span
            className="text-[13.5px] font-bold truncate"
            style={{
                color: active ? 'var(--sp-primary-dark)' : 'var(--sp-text)',
            }}
        >
          {conv.customer}
        </span>
                <span className="text-[10.5px] text-[var(--sp-text-3)] flex-none font-medium">
          {conv.updatedAt}
        </span>
            </div>

            <div className="text-[12.5px] text-[var(--sp-text-2)] truncate mb-2">
                {preview}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
                <ChannelBadge channel={conv.channel} size="sm" />
                <StatusBadge status={conv.aiStatus} />
                {conv.unread > 0 && (
                    <span
                        className="ms-auto inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-[10px] font-bold text-white"
                        style={{
                            background: 'var(--sp-gradient)',
                            boxShadow: '0 0 0 3px rgba(79,140,255,.15)',
                        }}
                    >
            {String(conv.unread).replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])}
          </span>
                )}
            </div>
        </button>
    );
}