import { MessageSquare, Package, Sparkles } from 'lucide-react';
import Drawer from '@/components/ui/Drawer';
import Button from '@/components/ui/Button';
import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';
import { money, fa } from '@/lib/format';
import { orders as allOrders, orderTotal } from '@/mocks/orders';
import { conversations as allConvs } from '@/mocks/conversations';

export default function CustomerDrawer({ open, customer, onClose }) {
    if (!customer) return null;

    const customerOrders = allOrders.filter((o) => o.customer === customer.name);
    const customerConvs = allConvs.filter((c) => c.customer === customer.name);
    const lastConv = customerConvs[0];

    return (
        <Drawer
            open={open}
            onClose={onClose}
            title="پروفایل مشتری"
            subtitle={`${fa(customer.conversations)} گفتگو · ${fa(customer.orders)} سفارش`}
            footer={
                <Button icon={MessageSquare} full onClick={onClose}>
                    شروع گفتگو
                </Button>
            }
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Avatar name={customer.name} size={56} radius={16} fontSize={22} />
                <div className="min-w-0">
                    <div className="text-[16px] font-bold text-[var(--sp-text)]">
                        {customer.name}
                    </div>
                    <div className="text-[12px] text-[var(--sp-text-3)] mt-1">
                        مشتری از {customer.since}
                    </div>
                </div>
            </div>

            {/* AI Summary */}
            <div
                className="p-3.5 rounded-xl mb-5 flex items-start gap-3"
                style={{
                    background: 'linear-gradient(135deg, rgba(79,140,255,.06), rgba(102,217,255,.08))',
                    border: '1px solid rgba(79,140,255,.2)',
                }}
            >
                <div
                    className="w-8 h-8 rounded-md grid place-items-center flex-none"
                    style={{ background: 'var(--sp-gradient)', color: '#fff' }}
                >
                    <Sparkles size={15} />
                </div>
                <div className="text-[12.5px] leading-relaxed" style={{ color: 'var(--sp-primary-dark)' }}>
                    <strong className="block mb-0.5">خلاصه Spica</strong>
                    این مشتری {fa(customer.orders)} خرید داشته و در مجموع {money(customer.spent)} تومان خرید کرده است.
                </div>
            </div>

            {/* Channels */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                کانال‌های ارتباطی
            </div>
            <div className="flex gap-1.5 flex-wrap mb-5">
                {(customer.channels || []).map((ch) => (
                    <ChannelBadge key={ch} channel={ch} />
                ))}
            </div>

            {/* Stats */}
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                آمار
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
                <div
                    className="p-3.5 rounded-xl"
                    style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
                >
                    <div className="text-[11px] text-[var(--sp-text-3)] mb-1">سفارش‌ها</div>
                    <div className="text-[18px] font-extrabold tabular-nums">{fa(customer.orders)}</div>
                </div>
                <div
                    className="p-3.5 rounded-xl"
                    style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
                >
                    <div className="text-[11px] text-[var(--sp-text-3)] mb-1">گفتگوها</div>
                    <div className="text-[18px] font-extrabold tabular-nums">{fa(customer.conversations)}</div>
                </div>
            </div>

            {/* Last conversation */}
            {lastConv && (
                <>
                    <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                        آخرین گفتگو
                    </div>
                    <div
                        className="p-4 rounded-xl mb-5"
                        style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <ChannelBadge channel={lastConv.channel} size="sm" />
                            <span className="text-[11px] text-[var(--sp-text-3)]">{lastConv.updatedAt}</span>
                        </div>
                        <p className="text-[12.5px] text-[var(--sp-text-2)] leading-relaxed">
                            {lastConv.messages[lastConv.messages.length - 1].text.replace(/\n/g, ' ')}
                        </p>
                    </div>
                </>
            )}

            {/* Orders */}
            {customerOrders.length > 0 && (
                <>
                    <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mb-3">
                        آخرین سفارش‌ها
                    </div>
                    <div className="flex flex-col gap-2">
                        {customerOrders.slice(0, 3).map((o) => (
                            <div
                                key={o.id}
                                className="flex items-center justify-between gap-3 p-3 rounded-xl"
                                style={{ background: 'var(--sp-surface-2)', border: '1px solid var(--sp-border)' }}
                            >
                                <div className="flex items-center gap-2.5">
                                    <div
                                        className="w-8 h-8 rounded-md grid place-items-center"
                                        style={{ background: 'var(--sp-surface-3)', color: 'var(--sp-text-3)' }}
                                    >
                                        <Package size={14} />
                                    </div>
                                    <div>
                                        <div className="text-[12.5px] font-bold tabular-nums">#{o.id}</div>
                                        <div className="text-[10.5px] text-[var(--sp-text-3)]">{o.date}</div>
                                    </div>
                                </div>
                                <div className="text-[12.5px] font-extrabold tabular-nums">
                                    {money(orderTotal(o))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </Drawer>
    );
}