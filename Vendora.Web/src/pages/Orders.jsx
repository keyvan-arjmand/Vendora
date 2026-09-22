import { useState, useMemo } from 'react';
import { Plus, Package2, TrendingUp, Clock, Calculator } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import Toolbar from '@/components/ui/Toolbar';
import Chip from '@/components/ui/Chip';
import EmptyState from '@/components/ui/EmptyState';
import Button from '@/components/ui/Button';
import OrderTable from '@/features/orders/OrderTable';
import OrderDrawer from '@/features/orders/OrderDrawer';
import { useOrders } from '@/context/OrdersContext';
import { useToast } from '@/context/ToastContext';
import { money, fa } from '@/lib/format';

function StatMini({ icon: Icon, label, value, tone = 'primary' }) {
    const tones = {
        primary: { bg: 'rgba(79,140,255,.1)', color: 'var(--sp-primary)' },
        green: { bg: 'rgba(16,185,129,.1)', color: 'var(--sp-success)' },
        amber: { bg: 'rgba(245,158,11,.1)', color: 'var(--sp-warning)' },
        violet: { bg: 'rgba(139,92,246,.1)', color: '#8B5CF6' },
    };
    const t = tones[tone] || tones.primary;

    return (
        <div
            className="flex items-center gap-3 p-4 rounded-lg"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div
                className="w-9 h-9 rounded-md grid place-items-center flex-none"
                style={{ background: t.bg, color: t.color }}
            >
                <Icon size={17} />
            </div>
            <div className="min-w-0">
                <div className="text-[11.5px] text-[var(--sp-text-3)]">{label}</div>
                <div className="text-[16px] font-extrabold tabular-nums text-[var(--sp-text)]">
                    {value}
                </div>
            </div>
        </div>
    );
}

export default function Orders() {
    const { orders, stats } = useOrders();
    const toast = useToast();

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [drawerId, setDrawerId] = useState(null);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return orders.filter((o) => {
            let matchF = true;
            if (filter === 'paid') matchF = o.payment === 'paid';
            if (filter === 'pending') matchF = o.payment === 'pending';
            if (filter === 'processing') matchF = o.status === 'processing';
            const matchQ =
                !q ||
                o.id.toLowerCase().includes(q) ||
                o.customer.includes(q) ||
                o.items.some((it) => it.name.toLowerCase().includes(q));
            return matchF && matchQ;
        });
    }, [orders, search, filter]);

    const active = drawerId ? orders.find((o) => o.id === drawerId) : null;

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="سفارش‌ها"
                subtitle="سفارش‌های ثبت‌شده توسط Spica و تیم شما."
                action={
                    <Button icon={Plus} onClick={() => toast.success('ایجاد سفارش در Step بعدی')}>
                        سفارش جدید
                    </Button>
                }
            />

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                <StatMini icon={Package2} label="کل سفارش‌ها" value={fa(stats.total)} />
                <StatMini icon={TrendingUp} label="درآمد کل" value={money(stats.revenue)} tone="green" />
                <StatMini icon={Clock} label="در انتظار" value={fa(stats.pending)} tone="amber" />
                <StatMini icon={Calculator} label="میانگین سفارش" value={money(stats.avg)} tone="violet" />
            </div>

            <div
                className="rounded-lg overflow-hidden"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <Toolbar
                    search={search}
                    onSearch={setSearch}
                    placeholder="جستجوی سفارش، مشتری یا محصول..."
                >
                    <div className="flex gap-1.5 flex-wrap">
                        <Chip active={filter === 'all'} onClick={() => setFilter('all')}>همه</Chip>
                        <Chip active={filter === 'paid'} onClick={() => setFilter('paid')}>پرداخت شده</Chip>
                        <Chip active={filter === 'pending'} onClick={() => setFilter('pending')}>در انتظار</Chip>
                        <Chip active={filter === 'processing'} onClick={() => setFilter('processing')}>در پردازش</Chip>
                    </div>
                </Toolbar>

                {filtered.length === 0 ? (
                    <EmptyState
                        icon="PackageOpen"
                        title="سفارشی پیدا نشد"
                        description="فیلتر یا عبارت جستجو را تغییر دهید."
                    />
                ) : (
                    <OrderTable orders={filtered} onOpen={setDrawerId} />
                )}
            </div>

            <OrderDrawer
                open={!!drawerId}
                order={active}
                onClose={() => setDrawerId(null)}
            />
        </div>
    );
}