import { Package } from 'lucide-react';
import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';
import { Table, THead, TH, TBody, TR, TD } from '@/components/ui/Table';
import { money, fa } from '@/lib/format';
import { orderItemCount, orderTotal } from '@/mocks/orders';

function PayBadge({ payment }) {
    if (payment === 'paid') {
        return (
            <span
                className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                style={{ color: 'var(--sp-success)', background: 'rgba(16,185,129,.1)' }}
            >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        پرداخت شده
      </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
            style={{ color: 'var(--sp-warning)', background: 'rgba(245,158,11,.1)' }}
        >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      در انتظار
    </span>
    );
}

function StatusBadge({ status }) {
    const map = {
        completed: { label: 'تکمیل', color: 'var(--sp-success)', bg: 'rgba(16,185,129,.1)' },
        processing: { label: 'در حال پردازش', color: 'var(--sp-primary-dark)', bg: 'rgba(79,140,255,.1)' },
        awaiting: { label: 'در انتظار', color: 'var(--sp-warning)', bg: 'rgba(245,158,11,.1)' },
        confirmed: { label: 'تأیید شده', color: 'var(--sp-success)', bg: 'rgba(16,185,129,.1)' },
    };
    const s = map[status] || { label: '—', color: 'var(--sp-text-3)', bg: 'var(--sp-surface-2)' };

    return (
        <span
            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
            style={{ color: s.color, background: s.bg }}
        >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {s.label}
    </span>
    );
}

export default function OrderTable({ orders, onOpen }) {
    return (
        <Table>
            <THead>
                <TH width={130}>شماره</TH>
                <TH>مشتری</TH>
                <TH>کانال</TH>
                <TH>اقلام</TH>
                <TH>مبلغ کل</TH>
                <TH>پرداخت</TH>
                <TH>وضعیت</TH>
                <TH>تاریخ</TH>
            </THead>
            <TBody>
                {orders.map((o) => (
                    <TR key={o.id} onClick={() => onOpen(o.id)}>
                        <TD strong mono>#{o.id}</TD>
                        <TD>
                            <div className="flex items-center gap-2.5">
                                <Avatar name={o.customer} size={30} radius={9} />
                                <span className="text-[12.5px]">{o.customer}</span>
                            </div>
                        </TD>
                        <TD>
                            <ChannelBadge channel={o.channel} size="sm" />
                        </TD>
                        <TD>
                            <div className="flex items-center gap-2">
                <span
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                        color: 'var(--sp-text-2)',
                        background: 'var(--sp-surface-2)',
                        border: '1px solid var(--sp-border)',
                    }}
                >
                  <Package size={12} />
                    {fa(orderItemCount(o))} قلم
                </span>
                            </div>
                        </TD>
                        <TD mono strong>{money(orderTotal(o))}</TD>
                        <TD>
                            <PayBadge payment={o.payment} />
                        </TD>
                        <TD>
                            <StatusBadge status={o.status} />
                        </TD>
                        <TD muted mono>{o.date}</TD>
                    </TR>
                ))}
            </TBody>
        </Table>
    );
}