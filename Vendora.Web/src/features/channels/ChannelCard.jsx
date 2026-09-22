import * as Icons from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ChannelCard({ channel, stats, onConnect, onManage }) {
    const Icon = Icons[channel.icon] || Icons.Circle;
    const connected = channel.status === 'connected';
    const pending = channel.status === 'pending';

    return (
        <div
            className="flex items-center gap-4 p-4 rounded-lg relative overflow-hidden transition-all"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
                opacity: connected ? 1 : 0.7,
            }}
        >
            <div
                className="absolute top-0 bottom-0 start-0 w-[3px]"
                style={{ background: connected ? channel.color : 'var(--sp-text-3)' }}
            />

            <div
                className="w-12 h-12 rounded-xl grid place-items-center text-white flex-none"
                style={{
                    background: channel.color,
                    boxShadow: `0 6px 16px -4px ${channel.shadow || channel.color}55`,
                }}
            >
                <Icon size={22} />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-[14px] font-bold text-[var(--sp-text)]">
            {channel.nameFa}
          </span>
                    {connected && (
                        <span
                            className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ color: 'var(--sp-success)', background: 'rgba(16,185,129,.1)' }}
                        >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              متصل
            </span>
                    )}
                    {pending && (
                        <span
                            className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ color: 'var(--sp-warning)', background: 'rgba(245,158,11,.1)' }}
                        >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              در انتظار
            </span>
                    )}
                </div>

                <div className="text-[11.5px] text-[var(--sp-text-3)]">
                    {stats?.connected}
                    {connected && ` · ${stats.conversations} گفتگو · ${stats.orders} سفارش`}
                </div>
            </div>

            <div className="flex-none">
                {connected ? (
                    <Button variant="ghost" size="sm" onClick={() => onManage?.(channel.key)}>
                        مدیریت
                    </Button>
                ) : pending ? (
                    <Button size="sm" onClick={() => onConnect?.(channel.key)}>
                        اتصال
                    </Button>
                ) : (
                    <span
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                        style={{ color: 'var(--sp-text-3)', background: 'var(--sp-surface-2)' }}
                    >
            Coming Soon
          </span>
                )}
            </div>
        </div>
    );
}