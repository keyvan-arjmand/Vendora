// ============================================
// SPICA — Global Constants
// ============================================

export const ROUTES = {
    DASHBOARD:     '/',
    CONVERSATIONS: '/conversations',
    PRODUCTS:      '/products',
    CUSTOMERS:     '/customers',
    ORDERS:        '/orders',
    AGENT:         '/agent',
    AGENT_RULES:   '/agent/rules',
    AGENT_KNOWLEDGE:'/agent/knowledge',
    CHANNELS:      '/channels',
    AI_ANALYZE:    '/ai',
    USAGE:         '/usage',
    SETTINGS:      '/settings',
};

// ---- Channels ----
export const CHANNELS = {
    telegram: {
        key: 'telegram',
        name: 'Telegram',
        nameFa: 'تلگرام',
        icon: 'Send',
        color: '#229ED9',
        soft: 'rgba(34,158,217,.1)',
        status: 'connected',
    },
    instagram: {
        key: 'instagram',
        name: 'Instagram',
        nameFa: 'اینستاگرام',
        icon: 'Camera',
        color: '#E1306C',
        soft: 'rgba(225,48,108,.1)',
        status: 'connected',
    },
    bale: {
        key: 'bale',
        name: 'Bale',
        nameFa: 'بله',
        icon: 'MessageCircle',
        color: '#00B4A6',
        soft: 'rgba(0,180,166,.1)',
        status: 'connected',
    },
    rubika: {
        key: 'rubika',
        name: 'Rubika',
        nameFa: 'روبیکا',
        icon: 'MessageSquare',
        color: '#7C3AED',
        soft: 'rgba(124,58,237,.1)',
        status: 'pending',
    },
    website: {
        key: 'website',
        name: 'Website',
        nameFa: 'وب‌سایت',
        icon: 'Globe',
        color: '#64748B',
        soft: 'rgba(100,116,139,.1)',
        status: 'connected',
    },
};

export const CHANNEL_ORDER = ['telegram', 'instagram', 'bale', 'rubika', 'website'];

// ---- Conversation States ----
export const CONVERSATION_STATES = [
    'Browsing',
    'Product Selected',
    'Waiting for Confirmation',
    'Order Created',
    'Awaiting Payment',
    'Completed',
];

// ---- Navigation ----
export const NAV_GROUPS = [
    {
        label: null,
        items: [
            { key: 'dashboard',     label: 'مرور فروش',  icon: 'LayoutGrid',         path: ROUTES.DASHBOARD },
            { key: 'conversations', label: 'گفتگوها',     icon: 'MessageSquareText',  path: ROUTES.CONVERSATIONS, badgeKey: 'conversations' },
            { key: 'orders',        label: 'سفارش‌ها',    icon: 'Package2',           path: ROUTES.ORDERS },
            { key: 'products',      label: 'محصولات',     icon: 'ShoppingBag',        path: ROUTES.PRODUCTS },
            { key: 'customers',     label: 'مشتری‌ها',    icon: 'Users',              path: ROUTES.CUSTOMERS },
        ],
    },
    {
        label: 'هوشمندی',
        items: [
            { key: 'agent',    label: 'فروشنده AI',   icon: 'Sparkles',     path: ROUTES.AGENT },
            { key: 'channels', label: 'کانال‌ها',     icon: 'RadioTower',   path: ROUTES.CHANNELS },
        ],
    },
    {
        label: 'سیستم',
        items: [
            { key: 'usage',    label: 'اشتراک و مصرف', icon: 'CreditCard', path: ROUTES.USAGE },
            { key: 'settings', label: 'تنظیمات',       icon: 'Settings2',  path: ROUTES.SETTINGS },
        ],
    },
];

// ---- Page Titles ----
export const PAGE_TITLES = {
    dashboard:     'مرور فروش',
    conversations: 'گفتگوها',
    orders:        'سفارش‌ها',
    products:      'محصولات',
    customers:     'مشتری‌ها',
    agent:         'فروشنده AI',
    channels:      'کانال‌ها',
    ai:            'AI و تحلیل',
    usage:         'اشتراک و مصرف',
    settings:      'تنظیمات',
};