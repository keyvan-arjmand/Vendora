import * as Icons from 'lucide-react';

export default function EmptyState({
                                       icon = 'Inbox',
                                       title,
                                       description,
                                       action,
                                   }) {
    const Icon = Icons[icon] || Icons.Inbox;

    return (
        <div className="py-14 px-6 text-center flex flex-col items-center gap-2">
            <div
                className="w-16 h-16 rounded-2xl grid place-items-center mb-2.5"
                style={{
                    background: 'var(--sp-surface-2)',
                    border: '1px solid var(--sp-border)',
                    color: 'var(--sp-text-3)',
                }}
            >
                <Icon size={26} />
            </div>
            {title && (
                <h4 className="text-[14.5px] font-bold text-[var(--sp-text)]">{title}</h4>
            )}
            {description && (
                <p className="text-[12.5px] text-[var(--sp-text-2)] max-w-[340px] leading-relaxed">
                    {description}
                </p>
            )}
            {action && <div className="mt-3">{action}</div>}
        </div>
    );
}