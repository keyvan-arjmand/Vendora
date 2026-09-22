// ============================================
// SPICA — Formatting helpers
// ============================================

/** تبدیل اعداد لاتین به فارسی */
export const fa = (v) =>
    String(v ?? '').replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

/** فرمت پول با جداکننده هزارگان فارسی */
export const money = (n) => fa(Number(n || 0).toLocaleString('en-US'));

/** حرف اول اسم */
export const initials = (n) => (n || '').trim().charAt(0);

/** گرادیان آواتار بر اساس نام (consistency) */
const AVATAR_GRADIENTS = [
    'linear-gradient(135deg,#4F8CFF 0%,#2563EB 100%)',
    'linear-gradient(135deg,#66D9FF 0%,#4F8CFF 100%)',
    'linear-gradient(135deg,#10B981 0%,#059669 100%)',
    'linear-gradient(135deg,#F59E0B 0%,#D97706 100%)',
    'linear-gradient(135deg,#EF4444 0%,#DC2626 100%)',
    'linear-gradient(135deg,#8B5CF6 0%,#6D28D9 100%)',
    'linear-gradient(135deg,#EC4899 0%,#BE185D 100%)',
    'linear-gradient(135deg,#14B8A6 0%,#0F766E 100%)',
];

export function avatarGradient(name) {
    let h = 0;
    const s = name || '?';
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return AVATAR_GRADIENTS[h % AVATAR_GRADIENTS.length];
}

/** تاریخ شمسی ساده */
export function todayFa() {
    try {
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(new Date());
    } catch {
        return fa(new Date().toLocaleDateString('en-US'));
    }
}

/** ساعت HH:MM فارسی */
export function nowTimeFa() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return fa(`${hh}:${mm}`);
}