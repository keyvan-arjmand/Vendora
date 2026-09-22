import { RefreshCw } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import KpiRow from '@/features/dashboard/KpiRow';
import ChannelTiles from '@/features/dashboard/ChannelTiles';
import ActivityChart from '@/features/dashboard/ActivityChart';
import AiCard from '@/features/dashboard/AiCard';
import SalesFunnel from '@/features/dashboard/SalesFunnel';
import RecentConversations from '@/features/dashboard/RecentConversations';
import RecentOrders from '@/features/dashboard/RecentOrders';
import { useToast } from '@/context/ToastContext';

export default function Dashboard() {
    const toast = useToast();

    const greeting = (() => {
        const h = new Date().getHours();
        if (h < 12) return 'صبح بخیر';
        if (h < 17) return 'وقت بخیر';
        return 'شب بخیر';
    })();

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title={`${greeting}، علی 👋`}
                subtitle="خلاصه امروز فروشگاه شما"
                action={
                    <button
                        onClick={() => toast.success('داده‌ها بروزرسانی شد.')}
                        className="inline-flex items-center gap-2 h-10 px-4 rounded-md text-[13px] font-semibold text-[var(--sp-text-2)] transition-all hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                            boxShadow: 'var(--sp-shadow-soft)',
                        }}
                    >
                        <RefreshCw size={15} />
                        بروزرسانی
                    </button>
                }
            />

            <KpiRow />

            <ChannelTiles />

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)] gap-4 mb-4">
                <ActivityChart />
                <AiCard />
            </div>

            {/* Sales Funnel + Recent */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] gap-4">
                <SalesFunnel />
                <RecentConversations />
                <RecentOrders />
            </div>
        </div>
    );
}