import Avatar from '@/components/shared/Avatar';
import ChannelBadge from '@/components/shared/ChannelBadge';
import { Table, THead, TH, TBody, TR, TD } from '@/components/ui/Table';
import { money, fa } from '@/lib/format';

export default function CustomerTable({ customers, onOpen }) {
    return (
        <Table>
            <THead>
                <TH width={240}>مشتری</TH>
                <TH>کانال‌ها</TH>
                <TH>شماره تماس</TH>
                <TH>گفتگوها</TH>
                <TH>سفارش‌ها</TH>
                <TH>ارزش خرید</TH>
                <TH>آخرین فعالیت</TH>
            </THead>
            <TBody>
                {customers.map((c) => (
                    <TR key={c.id} onClick={() => onOpen(c.id)}>
                        <TD strong>
                            <div className="flex items-center gap-3">
                                <Avatar name={c.name} size={36} />
                                <span>{c.name}</span>
                            </div>
                        </TD>
                        <TD>
                            <div className="flex items-center gap-1.5 flex-wrap">
                                {(c.channels || []).map((ch) => (
                                    <ChannelBadge key={ch} channel={ch} size="sm" />
                                ))}
                            </div>
                        </TD>
                        <TD muted mono>{fa(c.phone)}</TD>
                        <TD mono>{fa(c.conversations)}</TD>
                        <TD mono>{fa(c.orders)}</TD>
                        <TD mono strong>
                            {c.spent ? `${money(c.spent)} تومان` : '—'}
                        </TD>
                        <TD muted>{c.lastActivity}</TD>
                    </TR>
                ))}
            </TBody>
        </Table>
    );
}