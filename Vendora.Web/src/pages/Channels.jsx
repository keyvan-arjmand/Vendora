import { useState } from 'react';
import { RadioTower } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import ChannelCard from '@/features/channels/ChannelCard';
import { CHANNELS, CHANNEL_ORDER } from '@/lib/constants';
import { channelStats } from '@/mocks/channels';
import { useToast } from '@/context/ToastContext';
import { fa } from '@/lib/format';

export default function Channels() {
    const toast = useToast();
    const [channels, setChannels] = useState({ ...CHANNELS });

    const connect = (key) => {
        setChannels((prev) => ({
            ...prev,
            [key]: { ...prev[key], status: 'connected' },
        }));
        toast.success(`کانال ${channels[key].nameFa} با موفقیت متصل شد.`);
    };

    const manage = (key) => {
        toast.success(`مدیریت کانال ${channels[key].nameFa}`);
    };

    const connected = CHANNEL_ORDER.filter(
        (k) => channels[k].status === 'connected'
    ).length;

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="کانال‌های فروش"
                subtitle="Spica روی این کانال‌ها به مشتریان شما پاسخ می‌دهد."
            />

            {/* Overview banner */}
            <div
                className="p-5 rounded-lg mb-5 flex items-center gap-4"
                style={{
                    background:
                        'linear-gradient(135deg, var(--sp-surface) 0%, rgba(79,140,255,.04) 100%)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <div
                    className="w-12 h-12 rounded-xl grid place-items-center flex-none"
                    style={{
                        background: 'rgba(79,140,255,.1)',
                        color: 'var(--sp-primary)',
                    }}
                >
                    <RadioTower size={22} />
                </div>
                <div className="flex-1">
                    <div className="text-[14px] font-bold text-[var(--sp-text)]">
                        {fa(connected)} از {fa(CHANNEL_ORDER.length)} کانال متصل
                    </div>
                    <div className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                        برای فعال‌سازی کانال جدید، روی «اتصال» کلیک کنید.
                    </div>
                </div>
            </div>

            {/* Channel list */}
            <div className="flex flex-col gap-3">
                {CHANNEL_ORDER.map((k) => (
                    <ChannelCard
                        key={k}
                        channel={channels[k]}
                        stats={channelStats[k]}
                        onConnect={connect}
                        onManage={manage}
                    />
                ))}
            </div>
        </div>
    );
}