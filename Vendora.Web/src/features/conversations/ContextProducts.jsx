import { Footprints } from 'lucide-react';
import { money, fa } from '@/lib/format';

export default function ContextProducts({ products = [] }) {
    if (!products.length) {
        return (
            <div
                className="p-5 text-center text-[12px] text-[var(--sp-text-3)] rounded-xl"
                style={{ border: '1px dashed var(--sp-border-2)' }}
            >
                هنوز محصولی در این گفتگو مطرح نشده.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {products.map((p) => {
                const isMentioned = p.mentioned;
                const isOut = p.status === 'out';

                return (
                    <div
                        key={p.productId}
                        className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:-translate-y-px"
                        style={{
                            background: isMentioned
                                ? 'linear-gradient(160deg, rgba(79,140,255,.06), rgba(102,217,255,.08))'
                                : 'var(--sp-surface-2)',
                            border: `1px solid ${
                                isMentioned ? 'rgba(79,140,255,.25)' : 'var(--sp-border)'
                            }`,
                        }}
                    >
                        <div
                            className="w-10 h-10 rounded-md grid place-items-center flex-none"
                            style={{
                                background: isMentioned
                                    ? 'linear-gradient(135deg, rgba(79,140,255,.15), rgba(102,217,255,.2))'
                                    : 'var(--sp-surface-3)',
                                color: isMentioned
                                    ? 'var(--sp-primary)'
                                    : 'var(--sp-text-3)',
                            }}
                        >
                            <Footprints size={17} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap mb-1">
                <span className="text-[12.5px] font-bold text-[var(--sp-text)] truncate">
                  {p.name}
                </span>
                                {isMentioned && (
                                    <span
                                        className="text-[9.5px] font-extrabold px-1.5 py-0.5 rounded"
                                        style={{
                                            color: 'var(--sp-primary-dark)',
                                            background: 'rgba(79,140,255,.12)',
                                        }}
                                    >
                    مطرح شد
                  </span>
                                )}
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                                {p.size && p.size !== '—' && (
                                    <em className="not-italic text-[10.5px] font-medium text-[var(--sp-text-2)] px-1.5 py-0.5 rounded bg-[var(--sp-surface-3)]">
                                        سایز {fa(p.size)}
                                    </em>
                                )}
                                {p.color && p.color !== '—' && (
                                    <em className="not-italic text-[10.5px] font-medium text-[var(--sp-text-2)] px-1.5 py-0.5 rounded bg-[var(--sp-surface-3)]">
                                        {p.color}
                                    </em>
                                )}
                                {isOut && (
                                    <em
                                        className="not-italic text-[10.5px] font-medium px-1.5 py-0.5 rounded"
                                        style={{
                                            color: 'var(--sp-danger)',
                                            background: 'rgba(239,68,68,.1)',
                                        }}
                                    >
                                        ناموجود
                                    </em>
                                )}
                            </div>
                        </div>

                        <div className="text-end flex-none">
                            <div className="text-[11.5px] font-extrabold text-[var(--sp-text)] tabular-nums">
                                {money(p.price)}
                            </div>
                            <div className="text-[9.5px] text-[var(--sp-text-3)] mt-0.5">
                                تومان
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}