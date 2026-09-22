import { Search } from 'lucide-react';

export default function Toolbar({ search, onSearch, placeholder, children }) {
    return (
        <div
            className="flex items-center justify-between gap-4 px-5 py-4 flex-wrap"
            style={{ borderBottom: '1px solid var(--sp-border)' }}
        >
            {onSearch && (
                <div
                    className="flex items-center gap-2 h-10 px-3 rounded-md min-w-[280px] max-w-[320px] transition-all"
                    style={{
                        background: 'var(--sp-surface-2)',
                        border: '1px solid transparent',
                    }}
                >
                    <Search size={16} className="text-[var(--sp-text-3)] flex-none" />
                    <input
                        value={search}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder={placeholder || 'جستجو...'}
                        className="flex-1 min-w-0 bg-transparent outline-none text-[13px] placeholder:text-[var(--sp-text-3)]"
                        onFocus={(e) => {
                            e.target.parentElement.style.background = 'var(--sp-surface)';
                            e.target.parentElement.style.borderColor = 'var(--sp-primary)';
                            e.target.parentElement.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
                        }}
                        onBlur={(e) => {
                            e.target.parentElement.style.background = 'var(--sp-surface-2)';
                            e.target.parentElement.style.borderColor = 'transparent';
                            e.target.parentElement.style.boxShadow = 'none';
                        }}
                    />
                </div>
            )}
            {children}
        </div>
    );
}