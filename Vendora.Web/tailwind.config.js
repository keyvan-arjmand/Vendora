/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Brand
                primary: {
                    DEFAULT: '#4F8CFF',
                    dark:    '#2563EB',
                    accent:  '#66D9FF',
                },
                // Surfaces
                bg:      '#F7F9FC',
                surface: '#FFFFFF',
                // Dark
                navy: {
                    DEFAULT: '#0B1220',
                    surface: '#111A2E',
                },
                // Text
                ink: {
                    DEFAULT: '#0F172A',
                    muted:   '#64748B',
                },
                line: '#E2E8F0',
                // Semantic
                success: '#10B981',
                warning: '#F59E0B',
                danger:  '#EF4444',
            },
            fontFamily: {
                sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                sm: '8px',
                md: '10px',
                lg: '14px',
                xl: '18px',
            },
            boxShadow: {
                soft:  '0 1px 3px rgba(15,23,42,.04), 0 1px 2px rgba(15,23,42,.03)',
                card:  '0 4px 14px -4px rgba(15,23,42,.06), 0 2px 6px -2px rgba(15,23,42,.04)',
                lift:  '0 12px 32px -10px rgba(15,23,42,.12), 0 4px 12px -4px rgba(15,23,42,.06)',
                glow:  '0 0 0 3px rgba(79,140,255,.15)',
                primary: '0 6px 18px -4px rgba(79,140,255,.35)',
            },
            backgroundImage: {
                'brand':   'linear-gradient(135deg, #4F8CFF 0%, #66D9FF 100%)',
                'premium': 'linear-gradient(135deg, #2563EB 0%, #4F8CFF 55%, #66D9FF 100%)',
            },
            keyframes: {
                fadeUp:  { from: { opacity:0, transform:'translateY(6px)' }, to: { opacity:1, transform:'none' } },
                pulse:   { '0%,100%': { boxShadow:'0 0 0 0 rgba(16,185,129,.5)' }, '70%': { boxShadow:'0 0 0 8px rgba(16,185,129,0)' } },
            },
            animation: {
                fadeUp: 'fadeUp .3s cubic-bezier(.16,1,.3,1)',
                pulse:  'pulse 2s infinite',
            },
        },
    },
    plugins: [],
};