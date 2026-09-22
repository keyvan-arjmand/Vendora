// MOCK DATA — Replace with real API service
export const channels = {
    telegram:  { key:'telegram',  name:'Telegram',  nameFa:'تلگرام',    icon:'Send',          color:'#229ED9', soft:'rgba(34,158,217,.1)',  shadow:'rgba(34,158,217,.45)', status:'connected' },
    instagram: { key:'instagram', name:'Instagram', nameFa:'اینستاگرام', icon:'Instagram',     color:'#E1306C', soft:'rgba(225,48,108,.1)',  shadow:'rgba(225,48,108,.4)',  status:'connected' },
    bale:      { key:'bale',      name:'Bale',      nameFa:'بله',        icon:'MessageCircle', color:'#00B4A6', soft:'rgba(0,180,166,.1)',   shadow:'rgba(0,180,166,.4)',   status:'connected' },
    rubika:    { key:'rubika',    name:'Rubika',    nameFa:'روبیکا',     icon:'MessageSquare', color:'#7C3AED', soft:'rgba(124,58,237,.1)',  shadow:'rgba(124,58,237,.4)',  status:'pending' },
    website:   { key:'website',   name:'Website',   nameFa:'وب‌سایت',    icon:'Globe',         color:'#64748B', soft:'rgba(100,116,139,.1)', shadow:'rgba(100,116,139,.35)',status:'connected' },
};

export const channelStats = {
    telegram:  { conversations: 78, orders: 14, connected:'@SpicaStore' },
    instagram: { conversations: 26, orders: 5,  connected:'@spica.ir' },
    bale:      { conversations: 14, orders: 2,  connected:'@spica_bale' },
    rubika:    { conversations: 10, orders: 0,  connected:'@spica_rb' },
    website:   { conversations: 0,  orders: 0,  connected:'spica.ir' },
};

export const CHANNEL_ORDER = ['telegram', 'instagram', 'bale', 'rubika', 'website'];