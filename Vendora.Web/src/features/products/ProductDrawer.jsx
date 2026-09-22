import { Footprints, Package, TrendingUp } from 'lucide-react';
import Drawer from '@/components/ui/Drawer';
import Button from '@/components/ui/Button';
import { money, fa } from '@/lib/format';

export default function ProductDrawer({ open, product, onClose, onEdit }) {
    if (!product) return null;
    const isOut = product.status === 'out';

    return (
        <Drawer
            open={open}
            onClose={onClose}
            title={product.name}
            subtitle={`${product.sku} · ${product.category}`}
            footer={
                <>
                    <button
                        onClick={onClose}
                        className="h-10 px-4 rounded-md text-[13px] font-semibold text-[var(--sp-text-2)] transition-all hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        بستن
                    </button>
                    <Button onClick={() => onEdit?.(product.id)}>ویرایش</Button>
                </>
            }
        >
            <div className="flex items-center gap-4 mb-5">
                <div
                    className="w-16 h-16 rounded-xl grid place-items-center"
                    style={{
                        background: 'var(--sp-surface-2)',
                        border: '1px solid var(--sp-border)',
                        color: 'var(--sp-primary)',
                    }}
                >
                    <Footprints size={26} />
                </div>
                <div>
                    <div className="text-[22px] font-extrabold tracking-tight text-[var(--sp-text)] tabular-nums">
                        {money(product.price)}
                        <span className="text-[13px] ms-1 text-[var(--sp-text-3)] font-medium">
              تومان
            </span>
                    </div>
                    {isOut ? (
                        <span
                            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full mt-1"
                            style={{ color: 'var(--sp-danger)', background: 'rgba(239,68,68,.1)' }}
                        >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              ناموجود
            </span>
                    ) : (
                        <span
                            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full mt-1"
                            style={{ color: 'var(--sp-success)', background: 'rgba(16,185,129,.1)' }}
                        >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              موجود ({fa(product.stock)})
            </span>
                    )}
                </div>
            </div>

            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                مشخصات
            </div>
            <div
                className="rounded-xl p-4"
                style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
            >
                <div className="flex items-center justify-between py-2 text-[13px] border-b border-dashed border-[var(--sp-border)]">
                    <span className="text-[var(--sp-text-2)]">سایزها</span>
                    <strong className="font-semibold tabular-nums">{fa(product.sizes) || '—'}</strong>
                </div>
                <div className="flex items-center justify-between py-2 text-[13px] border-b border-dashed border-[var(--sp-border)]">
                    <span className="text-[var(--sp-text-2)]">رنگ‌ها</span>
                    <strong className="font-semibold">{product.colors || '—'}</strong>
                </div>
                <div className="flex items-center justify-between py-2 text-[13px]">
                    <span className="text-[var(--sp-text-2)]">دسته‌بندی</span>
                    <strong className="font-semibold">{product.category}</strong>
                </div>
            </div>

            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mt-5 mb-3">
                آماری
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div
                    className="p-3.5 rounded-xl flex items-center gap-3"
                    style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
                >
                    <div
                        className="w-9 h-9 rounded-md grid place-items-center flex-none"
                        style={{ color: 'var(--sp-primary)', background: 'rgba(79,140,255,.1)' }}
                    >
                        <Package size={16} />
                    </div>
                    <div>
                        <div className="text-[11px] text-[var(--sp-text-3)]">موجودی</div>
                        <div className="text-[15px] font-extrabold tabular-nums">{fa(product.stock)}</div>
                    </div>
                </div>
                <div
                    className="p-3.5 rounded-xl flex items-center gap-3"
                    style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
                >
                    <div
                        className="w-9 h-9 rounded-md grid place-items-center flex-none"
                        style={{ color: 'var(--sp-success)', background: 'rgba(16,185,129,.1)' }}
                    >
                        <TrendingUp size={16} />
                    </div>
                    <div>
                        <div className="text-[11px] text-[var(--sp-text-3)]">تعداد فروش</div>
                        <div className="text-[15px] font-extrabold tabular-nums">{fa(12)}</div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}