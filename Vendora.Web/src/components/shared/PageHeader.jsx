export default function PageHeader({ title, subtitle, action, icon }) {
    return (
        <div className="flex items-start justify-between gap-4 flex-wrap my-6">
            <div className="flex items-center gap-3">
                {icon && (
                    <div
                        className="w-11 h-11 rounded-xl grid place-items-center flex-none"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                            color: 'var(--sp-primary)',
                        }}
                    >
                        {icon}
                    </div>
                )}
                <div>
                    <h1 className="text-[22px] font-bold tracking-tight text-[var(--sp-text)] leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-[13px] text-[var(--sp-text-2)] mt-1">{subtitle}</p>
                    )}
                </div>
            </div>
            {action}
        </div>
    );
}