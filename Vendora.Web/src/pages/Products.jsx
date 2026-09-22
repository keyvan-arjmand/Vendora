import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import Toolbar from '@/components/ui/Toolbar';
import Chip from '@/components/ui/Chip';
import EmptyState from '@/components/ui/EmptyState';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import Button from '@/components/ui/Button';
import ProductTable from '@/features/products/ProductTable';
import ProductModal from '@/features/products/ProductModal';
import ProductDrawer from '@/features/products/ProductDrawer';
import { products as initialProducts } from '@/mocks/products';
import { useToast } from '@/context/ToastContext';
import { fa } from '@/lib/format';

export default function Products() {
    const toast = useToast();

    // ---- State محلی (بدون Context) ----
    const [products, setProducts] = useState(initialProducts || []);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [drawerId, setDrawerId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    // ---- CRUD محلی ----
    const create = (data) => {
        const newP = {
            id: 'p' + Date.now(),
            ...data,
            status: (data.stock > 0) ? 'instock' : 'out',
        };
        setProducts((prev) => [newP, ...prev]);
    };

    const update = (id, data) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? { ...p, ...data, status: (data.stock ?? p.stock) > 0 ? 'instock' : 'out' }
                    : p
            )
        );
    };

    const remove = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    const find = (id) => products.find((p) => p.id === id);

    // ---- Stats ----
    const stats = useMemo(() => ({
        total: products.length,
        instock: products.filter((p) => p.status === 'instock').length,
        out: products.filter((p) => p.status === 'out').length,
    }), [products]);

    // ---- Filter ----
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return products.filter((p) => {
            const matchQ =
                !q ||
                p.name.toLowerCase().includes(q) ||
                p.sku.toLowerCase().includes(q);
            let matchF = true;
            if (filter === 'instock') matchF = p.status === 'instock';
            if (filter === 'out') matchF = p.status === 'out';
            return matchQ && matchF;
        });
    }, [products, search, filter]);

    // ---- Handlers ----
    const openCreate = () => {
        setEditingId(null);
        setModalOpen(true);
    };

    const openEdit = (id) => {
        setEditingId(id);
        setModalOpen(true);
        setDrawerId(null);
    };

    const handleSave = (data) => {
        if (editingId) {
            update(editingId, data);
            toast.success('محصول با موفقیت ویرایش شد.');
        } else {
            create(data);
            toast.success('محصول با موفقیت اضافه شد.');
        }
    };

    const handleDelete = () => {
        if (deleteId) {
            remove(deleteId);
            toast.success('محصول حذف شد.');
            setDrawerId(null);
        }
    };

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="محصولات"
                subtitle="محصولات فروشگاه شما که Spica به مشتریان پیشنهاد می‌دهد."
                action={
                    <Button icon={Plus} onClick={openCreate}>
                        افزودن محصول
                    </Button>
                }
            />

            <div
                className="rounded-lg overflow-hidden"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <Toolbar search={search} onSearch={setSearch} placeholder="جستجوی محصول یا SKU...">
                    <div className="flex gap-1.5 flex-wrap">
                        <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
                            همه ({fa(stats.total)})
                        </Chip>
                        <Chip active={filter === 'instock'} onClick={() => setFilter('instock')}>
                            موجود ({fa(stats.instock)})
                        </Chip>
                        <Chip active={filter === 'out'} onClick={() => setFilter('out')}>
                            ناموجود ({fa(stats.out)})
                        </Chip>
                    </div>
                </Toolbar>

                {filtered.length === 0 ? (
                    <EmptyState
                        icon="ShoppingBag"
                        title={products.length === 0 ? 'هنوز محصولی نداری' : 'محصولی پیدا نشد'}
                        description={
                            products.length === 0
                                ? 'اولین محصولت را اضافه کن تا Spica بتواند آن را به مشتری‌ها پیشنهاد دهد.'
                                : 'عبارت جستجو یا فیلتر را تغییر دهید.'
                        }
                        action={
                            products.length === 0 && (
                                <Button icon={Plus} onClick={openCreate}>
                                    افزودن اولین محصول
                                </Button>
                            )
                        }
                    />
                ) : (
                    <ProductTable
                        products={filtered}
                        onEdit={openEdit}
                        onDelete={(id) => setDeleteId(id)}
                        onOpen={(id) => setDrawerId(id)}
                    />
                )}
            </div>

            <ProductModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                product={editingId ? find(editingId) : null}
                onSave={handleSave}
            />

            <ProductDrawer
                open={!!drawerId}
                product={drawerId ? find(drawerId) : null}
                onClose={() => setDrawerId(null)}
                onEdit={openEdit}
            />

            <ConfirmDialog
                open={!!deleteId}
                onClose={() => setDeleteId(null)}
                onConfirm={handleDelete}
                title="حذف محصول"
                message={`آیا از حذف «${find(deleteId)?.name || ''}» مطمئن هستید؟ این عملیات قابل بازگشت نیست.`}
                confirmText="حذف محصول"
            />
        </div>
    );
}