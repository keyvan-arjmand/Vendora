import { Sparkles, ShoppingCart, Hand, Bot } from 'lucide-react';
import ChannelBadge from '@/components/shared/ChannelBadge';
import ConversationStateStepper from './ConversationStateStepper';
import ContextProducts from './ContextProducts';
import { fa } from '@/lib/format';

function BlockTitle({ children }) {
    return (
        <div
            className="text-[10.5px] font-extrabold tracking-wider uppercase mb-2.5"
            style={{ color: 'var(--sp-text-3)' }}
        >
            {children}
        </div>
    );
}

function KV({ label, value }) {
    return (
        <div
            className="flex items-center justify-between gap-3 py-2 text-[12.5px]"
            style={{ borderBottom: '1px dashed var(--sp-border)' }}
        >
            <span className="text-[var(--sp-text-2)]">{label}</span>
            <strong className="text-[var(--sp-text)] font-semibold text-end">
                {value}
            </strong>
        </div>
    );
}

export default function ContextPanel({
                                         conv,
                                         onTakeover,
                                         onGiveBack,
                                         onAddProducts,
                                     }) {
    if (!conv) return null;
    const humanActive = conv.aiStatus === 'human';
    const products = conv.products || [];

    return (
        <aside
            className="flex flex-col h-full min-w-0"
            style={{
                background: 'var(--sp-surface)',
                borderInlineStart: '1px solid var(--sp-border)',
            }}
        >
            {/* Head */}
            <div
                className="flex-none flex items-center gap-2 px-5 py-3.5"
                style={{
                    background: 'var(--sp-surface-2)',
                    borderBottom: '1px solid var(--sp-border)',
                }}
            >
                <Sparkles size={16} style={{ color: 'var(--sp-primary)' }} />
                <span className="text-[13px] font-bold text-[var(--sp-text)]">
          خلاصه گفتگو
        </span>
                <span
                    className="ms-auto text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                    style={{
                        color: humanActive ? 'var(--sp-text-2)' : 'var(--sp-primary-dark)',
                        background: humanActive
                            ? 'var(--sp-surface-3)'
                            : 'rgba(79,140,255,.12)',
                    }}
                >
          {humanActive ? 'HUMAN' : 'SPICA'}
        </span>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
                <div>
                    <BlockTitle>کانال</BlockTitle>
                    <ChannelBadge channel={conv.channel} />
                </div>

                <div>
                    <BlockTitle>
                        محصولات مطرح‌شده ({fa(products.length)})
                    </BlockTitle>
                    <ContextProducts products={products} />
                </div>

                <div>
                    <BlockTitle>تحلیل Spica</BlockTitle>
                    <KV label="Intent" value={conv.intent} />
                    <KV label="Confidence" value={`${fa(conv.confidence)}٪`} />
                    <div className="h-1.5 mt-2.5 rounded-full bg-[var(--sp-surface-2)] overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                                width: `${conv.confidence}%`,
                                background: 'var(--sp-gradient)',
                                boxShadow: '0 0 8px rgba(79,140,255,.4)',
                            }}
                        />
                    </div>
                </div>

                <div>
                    <BlockTitle>اطلاعات استخراج‌شده</BlockTitle>
                    <KV label="محصول" value={conv.context.product} />
                    <KV label="سایز" value={conv.context.size} />
                    <KV label="رنگ" value={conv.context.color} />
                    <KV label="بودجه" value={conv.context.budget} />
                    <KV label="سفارش" value={conv.context.order} />
                </div>

                <div>
                    <BlockTitle>وضعیت گفتگو</BlockTitle>
                    <ConversationStateStepper current={conv.state} />
                </div>
            </div>

            {/* Footer */}
            <div
                className="flex-none p-5 flex flex-col gap-2"
                style={{
                    background: 'var(--sp-surface-2)',
                    borderTop: '1px solid var(--sp-border)',
                }}
            >
                {products.length > 0 && (
                    <button
                        onClick={onAddProducts}
                        className="inline-flex items-center justify-center gap-2 h-10 rounded-md text-[13px] font-semibold text-[var(--sp-text-2)] transition-all hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        <ShoppingCart size={15} />
                        افزودن به سفارش
                    </button>
                )}

                {humanActive ? (
                    <button
                        onClick={onGiveBack}
                        className="inline-flex items-center justify-center gap-2 h-10 rounded-md text-[13px] font-semibold text-[var(--sp-text-2)] transition-all hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        <Bot size={15} />
                        بازگرداندن به Spica
                    </button>
                ) : (
                    <button
                        onClick={onTakeover}
                        className="inline-flex items-center justify-center gap-2 h-10 rounded-md text-[13px] font-semibold text-white transition-all hover:-translate-y-px"
                        style={{
                            background: 'var(--sp-gradient)',
                            boxShadow: '0 6px 18px -4px rgba(79,140,255,.4)',
                        }}
                    >
                        <Hand size={15} />
                        کنترل گفتگو
                    </button>
                )}
            </div>
        </aside>
    );
}