import { Pencil, Trash2, Footprints } from 'lucide-react';
import { Table, THead, TH, TBody, TR, TD } from '@/components/ui/Table';
import { money, fa } from '@/lib/format';

export default function ProductTable({ products, onEdit, onDelete, onOpen }) {
    return (
        <Table>
            <THead>
                <TH width={280}>محصول</TH>
                <TH>SKU</TH>
                <TH>دسته</TH>
                <TH>قیمت</TH>
                <TH>موجودی</TH>
                <TH>وضعیت</TH>
                <TH align="left" width={90}></TH>
            </THead>
            <TBody>
                {products.map((p) => {
                    const isOut = p.status === 'out';
                    return (
                        <TR key={p.id} onClick={() => onOpen(p.id)}>
                            <TD strong>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-9 h-9 rounded-md grid place-items-center flex-none"
                                        style={{
                                            background: 'var(--sp-surface-2)',
                                            border: '1px solid var(--sp-border)',
                                            color: 'var(--sp-text-3)',
                                        }}
                                    >
                                        <Footprints size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[13px] font-semibold text-[var(--sp-text)] truncate">
                                            {p.name}
                                        </div>
                                        <div className="text-[11.5px] text-[var(--sp-text-3)] truncate">
                                            {p.colors}
                                        </div>
                                    </div>
                                </div>
                            </TD>
                            <TD muted>{p.sku}</TD>
                            <TD>{p.category}</TD>
                            <TD mono strong>{money(p.price)}</TD>
                            <TD mono>{fa(p.stock)}</TD>
                            <TD>
                                {isOut ? (
                                    <span
                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                                        style={{ color: 'var(--sp-danger)', background: 'rgba(239,68,68,.1)' }}
                                    >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    ناموجود
                  </span>
                                ) : (
                                    <span
                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                                        style={{ color: 'var(--sp-success)', background: 'rgba(16,185,129,.1)' }}
                                    >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    موجود
                  </span>
                                )}
                            </TD>
                            <TD align="left">
                                <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        onClick={() => onEdit(p.id)}
                                        className="w-8 h-8 rounded-md grid place-items-center text-[var(--sp-text-2)] transition-colors hover:bg-[var(--sp-surface-2)]"
                                        title="ویرایش"
                                    >
                                        <Pencil size={15} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(p.id)}
                                        className="w-8 h-8 rounded-md grid place-items-center text-[var(--sp-text-2)] transition-colors hover:bg-[rgba(239,68,68,.1)] hover:text-[var(--sp-danger)]"
                                        title="حذف"
                                    >
                                        <Trash2 size={15} />
                                    </button>
                                </div>
                            </TD>
                        </TR>
                    );
                })}
            </TBody>
        </Table>
    );
}