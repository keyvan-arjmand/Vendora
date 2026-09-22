export default function Tabs({ tabs, value, onChange }) {
    return (
        <div
            className="flex gap-0.5 overflow-x-auto"
            style={{ borderBottom: '1px solid var(--sp-border)' }}
        >
            {tabs.map((t) => {
                const active = t.key === value;
                return (
                    <button
                        key={t.key}
                        onClick={() => onChange(t.key)}
                        className="px-4 py-3 text-[13.5px] font-medium whitespace-nowrap transition-all relative"
                        style={{
                            color: active ? 'var(--sp-primary)' : 'var(--sp-text-2)',
                            fontWeight: active ? 700 : 500,
                            borderBottom: `2px solid ${active ? 'var(--sp-primary)' : 'transparent'}`,
                            marginBottom: '-1px',
                        }}
                    >
                        {t.label}
                    </button>
                );
            })}
        </div>
    );
}