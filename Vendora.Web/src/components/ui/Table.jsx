export function Table({ children }) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
                {children}
            </table>
        </div>
    );
}

export function THead({ children }) {
    return (
        <thead>
        <tr
            style={{
                background: 'var(--sp-surface-2)',
            }}
        >
            {children}
        </tr>
        </thead>
    );
}

export function TH({ children, align = 'right', width }) {
    return (
        <th
            className="text-[11px] font-bold tracking-wider uppercase whitespace-nowrap px-5 py-3"
            style={{
                color: 'var(--sp-text-3)',
                textAlign: align,
                borderBottom: '1px solid var(--sp-border)',
                width,
            }}
        >
            {children}
        </th>
    );
}

export function TBody({ children }) {
    return <tbody>{children}</tbody>;
}

export function TR({ children, onClick, selected = false, hover = true }) {
    return (
        <tr
            onClick={onClick}
            className={`transition-colors ${onClick ? 'cursor-pointer' : ''}`}
            style={{
                background: selected ? 'rgba(79,140,255,.06)' : 'transparent',
            }}
            onMouseEnter={(e) => {
                if (hover && !selected) e.currentTarget.style.background = 'var(--sp-surface-2)';
            }}
            onMouseLeave={(e) => {
                if (hover && !selected) e.currentTarget.style.background = 'transparent';
            }}
        >
            {children}
        </tr>
    );
}

export function TD({ children, align = 'right', strong = false, mono = false, muted = false }) {
    return (
        <td
            className={`px-5 py-3.5 align-middle ${mono ? 'tabular-nums' : ''}`}
            style={{
                textAlign: align,
                borderBottom: '1px solid var(--sp-border)',
                color: muted
                    ? 'var(--sp-text-3)'
                    : strong
                        ? 'var(--sp-text)'
                        : 'var(--sp-text)',
                fontWeight: strong ? 600 : 400,
                fontSize: muted ? 11.5 : 13,
            }}
        >
            {children}
        </td>
    );
}