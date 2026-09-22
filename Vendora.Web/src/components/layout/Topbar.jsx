// ============================================
// SPICA — Topbar
// ============================================
import { Search, Bell, HelpCircle, PanelRight } from 'lucide-react';
import { useAgent } from '@/context/AgentContext';

export default function Topbar({ onToggleSidebar }) {
    const { active } = useAgent();

    return (
        <header
            className="h-16 flex-none flex items-center gap-2.5 px-5 sticky top-0 z-30"
            style={{
                background: 'rgba(247,249,252,.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderBottom: '1px solid var(--sp-border)',
            }}
        >
            <button
                onClick={onToggleSidebar}
                className="w-10 h-10 rounded-md grid place-items-center text-[var(--sp-text-2)] hover:bg-[var(--sp-surface-2)] transition-colors"
                aria-label="منو"
            >
                <PanelRight size={18} />
            </button>

            {/* Search */}
            <div
                className="hidden md:flex items-center gap-2 h-10 px-3 rounded-md min-w-[280px] max-w-[380px] transition-all"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                }}
            >
                <Search size={16} className="text-[var(--sp-text-3)] flex-none" />
                <input
                    placeholder="جستجو در Spica..."
                    className="flex-1 min-w-0 bg-transparent outline-none text-[13px] placeholder:text-[var(--sp-text-3)]"
                />
                <kbd className="text-[10.5px] font-semibold text-[var(--sp-text-3)] bg-[var(--sp-surface-2)] border border-[var(--sp-border)] px-1.5 py-0.5 rounded">
                    ⌘K
                </kbd>
            </div>

            <div className="flex-1" />

            {/* AI Status Pill */}
            <div
                className="inline-flex items-center gap-2.5 h-9 px-3.5 rounded-full text-[12.5px] font-semibold transition-all"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    color: active ? 'var(--sp-text)' : 'var(--sp-danger)',
                }}
            >
        <span
            className={`w-2 h-2 rounded-full flex-none ${active ? 'animate-pulse' : ''}`}
            style={{
                background: active ? 'var(--sp-success)' : 'var(--sp-danger)',
                boxShadow: active ? '0 0 0 3px rgba(16,185,129,.15)' : '0 0 0 3px rgba(239,68,68,.15)',
            }}
        />
                <span className="hidden sm:inline">{active ? 'Spica فعال' : 'Spica غیرفعال'}</span>
            </div>

            <button
                className="w-10 h-10 rounded-md grid place-items-center text-[var(--sp-text-2)] hover:bg-[var(--sp-surface-2)] transition-colors relative"
                aria-label="اعلان‌ها"
            >
                <Bell size={18} />
                <span
                    className="absolute top-2.5 end-2.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--sp-danger)', border: '2px solid var(--sp-bg)' }}
                />
            </button>

            <button
                className="w-10 h-10 rounded-md grid place-items-center text-[var(--sp-text-2)] hover:bg-[var(--sp-surface-2)] transition-colors"
                aria-label="راهنما"
            >
                <HelpCircle size={18} />
            </button>
        </header>
    );
}