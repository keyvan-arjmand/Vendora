import { Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';
import MoneyValue from '@/components/shared/MoneyValue';
import { orders, orderTotal, orderItemCount } from '@/mocks/orders';
import { fa } from '@/lib/format';

function PayBadge({ payment }) {
    if (payment === 'paid') {
        return (
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                  style={{ color:'var(--sp-success)', background:'rgba(16,185,129,.1)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        پرداخت شده
      </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
              style={{ color:'var(--sp-warning)', background:'rgba(245,158,11,.1)' }}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      در انتظار
    </span>
    );
}

export default function RecentOrders({ limit = 3 }) {
    const items = orders.slice(0, limit);

    return (
        <div
            className="p-5 rounded-lg"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">
                    آخرین سفارش‌ها
                </h3>
                <Link
                    to="/orders"
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--sp-primary)] hover:underline"
                >
                    مشاهده همه
                    <ArrowLeft size={13} />
                </Link>
            </div>

            <div className="flex flex-col">
                {items.map((o, i) => (
                    <Link
                        key={o.id}
                        to="/orders"
                        className="flex items-center gap-3 py-3 -mx-2 px-2 rounded-md transition-colors hover:bg-[var(--sp-surface-2)]"
                        style={{
                            borderTop: i === 0 ? 'none' : '1px solid var(--sp-border)',
                        }}
                    >
                        <div
                            className="w-9 h-9 rounded-md grid place-items-center flex-none"
                            style={{
                                background: 'var(--sp-surface-2)',
                                border: '1px solid var(--sp-border)',
                                color: 'var(--sp-text-3)',
                            }}
                        >
                            <Package size={16} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[13px] font-bold text-[var(--sp-text)] tabular-nums">
                  #{o.id}
                </span>
                                <ChannelBadge channel={o.channel} size="sm" />
                            </div>
                            <div className="text-[11.5px] text-[var(--sp-text-3)]">
                                {o.customer} · {fa(orderItemCount(o))} قلم
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 flex-none">
                            <MoneyValue value={orderTotal(o)} size="sm" />
                            <PayBadge payment={o.payment} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}