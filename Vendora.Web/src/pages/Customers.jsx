import { useState, useMemo } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import Toolbar from '@/components/ui/Toolbar';
import EmptyState from '@/components/ui/EmptyState';
import CustomerTable from '@/features/customers/CustomerTable';
import CustomerDrawer from '@/features/customers/CustomerDrawer';
import { customers } from '@/mocks/customers';

export default function Customers() {
    const [search, setSearch] = useState('');
    const [drawerId, setDrawerId] = useState(null);

    const filtered = useMemo(() => {
        const q = search.trim();
        return customers.filter((c) => !q || c.name.includes(q) || c.phone.includes(q));
    }, [search]);

    const active = drawerId ? customers.find((c) => c.id === drawerId) : null;

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="مشتری‌ها"
                subtitle="مشتریانی که با Spica گفتگو کرده‌اند."
            />

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
                    placeholder="جستجوی مشتری..."
                />

                {filtered.length === 0 ? (
                    <EmptyState
                        icon="Users"
                        title="مشتری‌ای پیدا نشد"
                        description="عبارت جستجو را تغییر دهید."
                    />
                ) : (
                    <CustomerTable customers={filtered} onOpen={setDrawerId} />
                )}
            </div>

            <CustomerDrawer
                open={!!drawerId}
                customer={active}
                onClose={() => setDrawerId(null)}
            />
        </div>
    );
}