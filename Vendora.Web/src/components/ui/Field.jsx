export function Field({ label, hint, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                {label}
            </label>
            {children}
            {hint && <span className="text-[11.5px] text-[var(--sp-text-3)]">{hint}</span>}
        </div>
    );
}

export function TextInput({ value, onChange, placeholder, ...props }) {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="h-11 px-3.5 rounded-md w-full outline-none text-[13px] transition-all"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                color: 'var(--sp-text)',
            }}
            onFocus={(e) => {
                e.target.style.borderColor = 'var(--sp-primary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = 'var(--sp-border)';
                e.target.style.boxShadow = 'none';
            }}
            {...props}
        />
    );
}

export function TextArea({ value, onChange, placeholder, rows = 3, ...props }) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className="px-3.5 py-3 rounded-md w-full outline-none text-[13px] transition-all resize-vertical leading-relaxed"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                color: 'var(--sp-text)',
            }}
            onFocus={(e) => {
                e.target.style.borderColor = 'var(--sp-primary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = 'var(--sp-border)';
                e.target.style.boxShadow = 'none';
            }}
            {...props}
        />
    );
}