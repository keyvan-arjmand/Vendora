export default function MessageBubble({ msg }) {
    const { from, text, time } = msg;
    const isCustomer = from === 'customer';
    const isAI = from === 'ai';
    const isHuman = from === 'human';

    return (
        <div
            className={`flex flex-col max-w-[75%] gap-1.5 animate-fadeUp ${
                isCustomer ? 'self-start items-start' : 'self-end items-end'
            }`}
        >
            <div
                className="px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed whitespace-pre-line break-words"
                style={
                    isCustomer
                        ? {
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                            borderStartStartRadius: 5,
                            boxShadow: 'var(--sp-shadow-soft)',
                            color: 'var(--sp-text)',
                        }
                        : isAI
                            ? {
                                background:
                                    'linear-gradient(135deg, rgba(79,140,255,.1) 0%, rgba(102,217,255,.15) 100%)',
                                color: 'var(--sp-primary-dark)',
                                borderStartEndRadius: 5,
                                boxShadow: '0 2px 8px -3px rgba(79,140,255,.25)',
                            }
                            : {
                                background: 'var(--sp-surface)',
                                border: '1px solid var(--sp-border-2)',
                                color: 'var(--sp-text)',
                                borderStartEndRadius: 5,
                                boxShadow: 'var(--sp-shadow-soft)',
                            }
                }
            >
                {text}
            </div>

            <div className="flex items-center gap-1.5 px-1 text-[10.5px] text-[var(--sp-text-3)] font-medium">
                {isAI && (
                    <span
                        className="inline-flex items-center text-white text-[9.5px] font-extrabold px-1.5 py-[1px] rounded"
                        style={{ background: 'var(--sp-gradient)' }}
                    >
            SPICA
          </span>
                )}
                {isHuman && (
                    <span
                        className="inline-flex items-center text-white text-[9.5px] font-extrabold px-1.5 py-[1px] rounded"
                        style={{ background: '#8B94A8' }}
                    >
            شما
          </span>
                )}
                <span>{time}</span>
            </div>
        </div>
    );
}