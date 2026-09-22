import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHANNELS, CHANNEL_ORDER } from '@/lib/constants';
import { channelStats } from '@/mocks/channels';
import { fa } from '@/lib/format';

function Tile({ channelKey }) {
    const c = CHANNELS[channelKey];
    const s = channelStats[channelKey];
    const Icon = Icons[c.icon];
    const connected = c.status === 'connected';
    const pending = c.status === 'pending';

    return (
        <Link
            to="/conversations"
            className="group relative flex flex-col gap-3 p-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            {/* Top accent */}
            <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: c.color, opacity: connected ? 0.9 : 0.4 }}
            />

            <div className="flex items-center gap-2.5">
                <div
                    className="w-10 h-10 rounded-xl grid place-items-center text-white flex-none"
                    style={{
                        background: c.color,
                        boxShadow: `0 4px 12px -3px ${c.shadow}`,
                    }}
                >
                    <Icon size={19} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-bold text-[var(--sp-text)] truncate">
                        {c.nameFa}
                    </div>
                    <div className="text-[11px] text-[var(--sp-text-3)] truncate">
                        {s.connected}
                    </div>
                </div>
                <span
                    className="w-2 h-2 rounded-full flex-none"
                    style={{
                        background: connected ? 'var(--sp-success)' : pending ? 'var(--sp-warning)' : 'var(--sp-text-3)',
                        boxShadow: connected
                            ? '0 0 0 3px rgba(16,185,129,.15)'
                            : pending
                                ? '0 0 0 3px rgba(245,158,11,.15)'
                                : 'none',
                    }}
                />
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <div className="text-[19px] font-extrabold tracking-tight text-[var(--sp-text)] leading-none tabular-nums">
                        {fa(s.conversations)}
                    </div>
                    <div className="text-[11px] text-[var(--sp-text-3)] mt-1">گفتگو</div>
                </div>
                <div className="text-end">
                    <div className="text-[19px] font-extrabold tracking-tight text-[var(--sp-text)] leading-none tabular-nums">
                        {fa(s.orders)}
                    </div>
                    <div className="text-[11px] text-[var(--sp-text-3)] mt-1">سفارش</div>
                </div>
            </div>
        </Link>
    );
}

export default function ChannelTiles() {
    const connectedCount = CHANNEL_ORDER.filter(
        (k) => CHANNELS[k].status === 'connected'
    ).length;

    return (
        <div
            className="p-5 rounded-lg mb-4"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div>
                    <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">
                        کانال‌های فروش
                    </h3>
                    <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                        Spica روی این کانال‌ها به مشتریان شما پاسخ می‌دهد.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-[12.5px]">
          <span className="text-[var(--sp-text-2)]">
            {fa(connectedCount)} از {fa(CHANNEL_ORDER.length)} متصل
          </span>
                    <Link
                        to="/channels"
                        className="text-[var(--sp-primary)] font-semibold hover:underline"
                    >
                        مدیریت
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {CHANNEL_ORDER.slice(0, 4).map((k) => (
                    <Tile key={k} channelKey={k} />
                ))}
            </div>
        </div>
    );
}