import { ChevronDown } from 'lucide-react';

export default function Select({ value, onChange, options = [], className = '', ...props }) {
    return (
        <div className={`relative ${className}`}>
            <select
                value={value}
                onChange={onChange}
                className="appearance-none w-full h-11 ps-3.5 pe-10 rounded-md outline-none text-[13px] transition-all cursor-pointer"
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
            >
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
            <ChevronDown
                size={15}
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ insetInlineEnd: 12, color: 'var(--sp-text-3)' }}
            />
        </div>
    );
}