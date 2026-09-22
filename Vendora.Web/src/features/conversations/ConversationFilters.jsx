import * as Icons from 'lucide-react';
import Chip from '@/components/ui/Chip';
import { CHANNELS, CHANNEL_ORDER } from '@/lib/constants';

const MAIN_FILTERS = [
    { key: 'all', label: 'همه' },
    { key: 'ai', label: 'Spica فعال' },
    { key: 'review', label: 'نیازمند بررسی' },
    { key: 'order', label: 'سفارش' },
];

export default function ConversationFilters({
                                                filter,
                                                onFilter,
                                                channelFilter,
                                                onChannelFilter,
                                            }) {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex gap-1.5 flex-wrap">
                {MAIN_FILTERS.map((f) => (
                    <Chip
                        key={f.key}
                        active={filter === f.key}
                        onClick={() => onFilter(f.key)}
                    >
                        {f.label}
                    </Chip>
                ))}
            </div>

            <div
                className="flex gap-1.5 flex-wrap pt-2.5"
                style={{ borderTop: '1px dashed var(--sp-border)' }}
            >
                <Chip
                    active={channelFilter === 'all'}
                    icon={Icons.Layers}
                    onClick={() => onChannelFilter('all')}
                >
                    همه کانال‌ها
                </Chip>

                {CHANNEL_ORDER.slice(0, 4).map((key) => {
                    const c = CHANNELS[key];
                    const Icon = Icons[c.icon] || Icons.Circle;
                    const isActive = channelFilter === key;
                    return (
                        <button
                            key={key}
                            type="button"
                            onClick={() => onChannelFilter(key)}
                            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-[12px] font-medium transition-all border"
                            style={{
                                background: isActive ? c.color : 'var(--sp-surface)',
                                color: isActive ? '#fff' : 'var(--sp-text-2)',
                                borderColor: isActive ? 'transparent' : 'var(--sp-border)',
                            }}
                        >
                            <Icon size={13} />
                            {c.nameFa}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}