export default function Switch({ checked, onChange, label, disabled = false }) {
    return (
        <label
            className={`inline-flex items-center gap-2.5 select-none ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
        >
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={(e) => !disabled && onChange?.(e.target.checked)}
                disabled={disabled}
            />
            <span
                className="relative w-11 h-6 rounded-full transition-all duration-300 flex-none"
                style={{
                    background: checked ? 'var(--sp-gradient)' : '#D8DCE3',
                }}
            >
        <span
            className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300"
            style={{
                insetInlineEnd: checked ? '2px' : 'calc(100% - 22px)',
                boxShadow: '0 1px 3px rgba(0,0,0,.2)',
            }}
        />
      </span>
            {label && (
                <span className="text-[13px] font-semibold text-[var(--sp-text)]">
          {label}
        </span>
            )}
        </label>
    );
}