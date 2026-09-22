import { CONVERSATION_STATES } from '@/lib/constants';

export default function ConversationStateStepper({ current }) {
    const idx = CONVERSATION_STATES.indexOf(current);

    return (
        <ol className="flex flex-col gap-0">
            {CONVERSATION_STATES.map((s, i) => {
                const done = i < idx;
                const isCurrent = i === idx;

                return (
                    <li
                        key={s}
                        className="flex items-center gap-2.5 text-[12.5px] py-1.5 relative"
                        style={{
                            color: isCurrent
                                ? 'var(--sp-primary)'
                                : done
                                    ? 'var(--sp-text-2)'
                                    : 'var(--sp-text-3)',
                            fontWeight: isCurrent ? 700 : 500,
                        }}
                    >
            <span
                className="w-2.5 h-2.5 rounded-full flex-none relative z-10"
                style={{
                    background: isCurrent
                        ? 'var(--sp-primary)'
                        : done
                            ? 'var(--sp-success)'
                            : 'transparent',
                    border: `2px solid ${
                        isCurrent
                            ? 'var(--sp-primary)'
                            : done
                                ? 'var(--sp-success)'
                                : 'var(--sp-border-2)'
                    }`,
                    boxShadow: isCurrent
                        ? '0 0 0 4px rgba(79,140,255,.15)'
                        : done
                            ? '0 0 0 3px rgba(16,185,129,.15)'
                            : 'none',
                }}
            />
                        {i < CONVERSATION_STATES.length - 1 && (
                            <span
                                className="absolute start-[4.5px] top-[26px] bottom-[-6px] w-px"
                                style={{
                                    background: done
                                        ? 'var(--sp-success)'
                                        : 'var(--sp-border)',
                                }}
                            />
                        )}
                        <span>{s}</span>
                    </li>
                );
            })}
        </ol>
    );
}