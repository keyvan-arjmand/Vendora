import { Package, CreditCard } from 'lucide-react';
import Drawer from '@/components/ui/Drawer';
import ChannelBadge from '@/components/shared/ChannelBadge';
import Avatar from '@/components/shared/Avatar';
import Button from '@/components/ui/Button';
import OrderTimeline from './OrderTimeline';
import { money, fa } from '@/lib/format';
import { orderSubtotal, orderTotal, orderItemCount } from '@/mocks/orders';

export default function OrderDrawer({ open, order, onClose }) {
    if (!order) return null;

    const subtotal = orderSubtotal(order);
    const discount = order.discount || 0;
    const shipping = order.shipping || 0;
    const total = orderTotal(order);

    return (
        <Drawer
            open={open}
            onClose={onClose}
            title={`سفارش #${order.id}`}
            subtitle={`${order.date} · ${fa(orderItemCount(order))} قلم`}
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
                    <Button icon={CreditCard}>تأیید پرداخت</Button>
                </>
            }
        >
            {/* Customer */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                مشتری
            </div>
            <div className="flex items-center gap-3 mb-5">
                <Avatar name={order.customer} size={44} radius={12} />
                <div>
                    <div className="text-[13.5px] font-bold text-[var(--sp-text)]">
                        {order.customer}
                    </div>
                    <div className="text-[11.5px] text-[var(--sp-text-3)]">{order.date}</div>
                </div>
            </div>

            {/* Channel */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                کانال ثبت
            </div>
            <div className="flex items-center gap-2 mb-5">
                <ChannelBadge channel={order.channel} />
                <span className="text-[11.5px] text-[var(--sp-text-3)]">
          سفارش از این کانال ثبت شده است
        </span>
            </div>

            {/* Items */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                اقلام سفارش ({fa(orderItemCount(order))})
            </div>
            <div
                className="rounded-xl overflow-hidden mb-5"
                style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
            >
                <div
                    className="flex items-center justify-between px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider"
                    style={{
                        background: 'var(--sp-surface-3)',
                        color: 'var(--sp-text-3)',
                        borderBottom: '1px solid var(--sp-border)',
                    }}
                >
                    <span>محصول</span>
                    <span>مبلغ</span>
                </div>

                {order.items.map((it, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between gap-3 px-4 py-3"
                        style={{ borderBottom: '1px solid var(--sp-border)' }}
                    >
                        <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-[var(--sp-text)] mb-1">
                                {it.name}
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                                <em className="not-italic text-[10.5px] font-medium text-[var(--sp-text-2)] px-1.5 py-0.5 rounded bg-[var(--sp-surface-3)]">
                                    {it.sku}
                                </em>
                                {it.size && it.size !== '—' && (
                                    <em className="not-italic text-[10.5px] font-medium text-[var(--sp-text-2)] px-1.5 py-0.5 rounded bg-[var(--sp-surface-3)]">
                                        سایز {fa(it.size)}
                                    </em>
                                )}
                                {it.color && it.color !== '—' && (
                                    <em className="not-italic text-[10.5px] font-medium text-[var(--sp-text-2)] px-1.5 py-0.5 rounded bg-[var(--sp-surface-3)]">
                                        {it.color}
                                    </em>
                                )}
                            </div>
                        </div>
                        <div className="text-end flex-none">
                            <div className="text-[13px] font-extrabold tabular-nums text-[var(--sp-text)]">
                                {money(it.qty * it.price)}
                            </div>
                            <div className="text-[10.5px] text-[var(--sp-text-3)] tabular-nums mt-0.5">
                                {fa(it.qty)} × {money(it.price)}
                            </div>
                        </div>
                    </div>
                ))}

                <div
                    className="px-4 py-4 flex flex-col gap-2"
                    style={{ background: 'var(--sp-surface)' }}
                >
                    <div className="flex justify-between text-[13px]">
                        <span className="text-[var(--sp-text-2)]">جمع کالاها</span>
                        <strong className="tabular-nums">{money(subtotal)}</strong>
                    </div>
                    {discount > 0 && (
                        <div className="flex justify-between text-[13px]">
                            <span className="text-[var(--sp-text-2)]">تخفیف</span>
                            <strong className="tabular-nums" style={{ color: 'var(--sp-danger)' }}>
                                − {money(discount)}
                            </strong>
                        </div>
                    )}
                    <div className="flex justify-between text-[13px]">
                        <span className="text-[var(--sp-text-2)]">هزینه ارسال</span>
                        <strong className="tabular-nums">
                            {shipping ? money(shipping) : 'رایگان'}
                        </strong>
                    </div>
                    <div
                        className="flex justify-between pt-3 mt-1 text-[15px]"
                        style={{ borderTop: '1px dashed var(--sp-border)' }}
                    >
                        <span className="font-bold">مبلغ کل</span>
                        <strong
                            className="font-extrabold tabular-nums"
                            style={{ color: 'var(--sp-primary)' }}
                        >
                            {money(total)} تومان
                        </strong>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                مراحل سفارش
            </div>
            <OrderTimeline timeline={order.timeline} />
        </Drawer>
    );
}