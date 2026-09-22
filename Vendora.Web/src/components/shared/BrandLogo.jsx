// ============================================
// SPICA — Brand Logo
// Star glow concept
// ============================================
import { Star } from 'lucide-react';

export default function BrandLogo({ size = 'md', showText = true }) {
    const sizes = {
        sm: { box: 'w-8 h-8',  icon: 16, text: 'text-[14px]', sub: 'text-[10px]' },
        md: { box: 'w-10 h-10', icon: 19, text: 'text-[16px]', sub: 'text-[11px]' },
        lg: { box: 'w-12 h-12', icon: 22, text: 'text-[18px]', sub: 'text-[12px]' },
    };
    const s = sizes[size] || sizes.md;

    return (
        <div className="flex items-center gap-3">
            <div
                className={`${s.box} rounded-xl grid place-items-center text-white relative overflow-hidden flex-none`}
                style={{
                    background: 'var(--sp-gradient)',
                    boxShadow: '0 6px 18px -4px rgba(79,140,255,.45), inset 0 1px 0 rgba(255,255,255,.3)',
                }}
            >
                <Star size={s.icon} strokeWidth={2.4} fill="currentColor" />
            </div>

            {showText && (
                <div className="flex flex-col leading-tight">
                    <strong className={`${s.text} font-extrabold tracking-tight text-[var(--sp-text)]`}>
                        Spica
                    </strong>
                    <span className={`${s.sub} text-[var(--sp-text-2)] font-medium`}>
            AI Sales Employee
          </span>
                </div>
            )}
        </div>
    );
}