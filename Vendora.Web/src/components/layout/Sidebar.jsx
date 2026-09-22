// ============================================
// SPICA — Sidebar
// ============================================
import { NavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';
import BrandLogo from '@/components/shared/BrandLogo';
import { NAV_GROUPS } from '@/lib/constants';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import { initials, avatarGradient } from '@/lib/format';

function NavItem({ item, badge }) {
    const Icon = Icons[item.icon] || Icons.Circle;

    return (
        <NavLink
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
                [
                    'flex items-center gap-3 px-3 py-2.5 rounded-md text-[13.5px] font-medium',
                    'transition-all duration-200 relative group',
                    isActive
                        ? 'bg-[rgba(79,140,255,.1)] text-[var(--sp-primary-dark)] font-semibold'
                        : 'text-[var(--sp-text-2)] hover:bg-[var(--sp-surface-2)] hover:text-[var(--sp-text)]',
                ].join(' ')
            }
        >
            {({ isActive }) => (
                <>
          <span
              className={[
                  'w-8 h-8 rounded-md grid place-items-center flex-none transition-all',
                  isActive
                      ? 'text-white shadow-[0_3px_10px_-2px_rgba(79,140,255,.5)]'
                      : 'text-[var(--sp-text-3)] group-hover:text-[var(--sp-text-2)]',
              ].join(' ')}
              style={
                  isActive
                      ? { background: 'var(--sp-gradient)' }
                      : undefined
              }
          >
            <Icon size={17} />
          </span>
                    <span className="truncate">{item.label}</span>

                    {badge != null && badge > 0 && (
                        <em className="ms-auto not-italic bg-[var(--sp-primary)] text-white text-[10.5px] font-bold px-2 py-0.5 rounded-full leading-tight shadow-[0_2px_6px_-1px_rgba(79,140,255,.5)]">
                            {badge.toLocaleString('fa-IR')}
                        </em>
                    )}

                    {isActive && (
                        <span
                            className="absolute top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-full"
                            style={{
                                background: 'var(--sp-primary)',
                                insetInlineEnd: '-12px',
                            }}
                        />
                    )}
                </>
            )}
        </NavLink>
    );
}

export default function Sidebar({ conversationCount = 3 }) {
    const { user, logout } = useAuth();
    const toast = useToast();

    const handleLogout = () => {
        logout();
        toast.success('از حساب خود خارج شدید.');
    };

    return (
        <aside
            className="w-[264px] flex-none h-screen sticky top-0 flex flex-col z-40"
            style={{
                background: 'var(--sp-surface)',
                borderInlineEnd: '1px solid var(--sp-border)',
            }}
        >
            {/* ============ Brand ============ */}
            <div
                className="flex items-center px-5 h-16 flex-none"
                style={{ borderBottom: '1px solid var(--sp-border)' }}
            >
                <BrandLogo size="md" />
            </div>

            {/* ============ Navigation ============ */}
            <nav className="flex-1 overflow-y-auto py-3 px-3">
                {NAV_GROUPS.map((group, gi) => (
                    <div key={gi}>
                        {group.label && (
                            <div className="text-[10.5px] font-bold text-[var(--sp-text-3)] tracking-wider uppercase px-3 pt-5 pb-2">
                                {group.label}
                            </div>
                        )}

                        <div className="flex flex-col gap-0.5">
                            {group.items.map((item) => (
                                <NavItem
                                    key={item.key}
                                    item={item}
                                    badge={
                                        item.badgeKey === 'conversations' ? conversationCount : null
                                    }
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* ============ User Card + Logout ============ */}
            <div
                className="flex-none p-3.5"
                style={{ borderTop: '1px solid var(--sp-border)' }}
            >
                <div
                    className="flex items-center gap-2.5 p-2 rounded-md transition-colors group"
                    style={{ cursor: 'default' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--sp-surface-2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    {/* Avatar */}
                    <div
                        className="w-9 h-9 rounded-md grid place-items-center text-white font-bold text-[13px] flex-none"
                        style={{ background: avatarGradient(user?.name || 'کاربر') }}
                    >
                        {initials(user?.name || 'کاربر')}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 leading-tight">
                        <strong className="block text-[13px] font-semibold text-[var(--sp-text)] truncate">
                            {user?.name || 'کاربر مهمان'}
                        </strong>
                        <span className="text-[11px] text-[var(--sp-text-3)] truncate block">
              {user?.storeName || 'مدیر فروشگاه'}
            </span>
                    </div>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="w-7 h-7 rounded-md grid place-items-center text-[var(--sp-text-3)] transition-colors"
                        aria-label="خروج"
                        title="خروج از حساب"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(239,68,68,.1)';
                            e.currentTarget.style.color = 'var(--sp-danger)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--sp-text-3)';
                        }}
                    >
                        <Icons.LogOut size={15} />
                    </button>
                </div>
            </div>
        </aside>
    );
}