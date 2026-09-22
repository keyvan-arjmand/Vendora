import { Star, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';

export default function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left side — Form */}
            <div className="flex flex-col p-6 md:p-10 relative">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-8">
                    <div
                        className="w-10 h-10 rounded-xl grid place-items-center text-white relative overflow-hidden flex-none"
                        style={{
                            background: 'var(--sp-gradient)',
                            boxShadow:
                                '0 6px 18px -4px rgba(79,140,255,.45), inset 0 1px 0 rgba(255,255,255,.3)',
                        }}
                    >
                        <Star size={19} strokeWidth={2.4} fill="currentColor" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <strong className="text-[16px] font-extrabold tracking-tight text-[var(--sp-text)]">
                            Spica
                        </strong>
                        <span className="text-[11px] text-[var(--sp-text-2)] font-medium">
              AI Sales Employee
            </span>
                    </div>
                </div>

                {/* Form area */}
                <div className="flex-1 flex flex-col justify-center max-w-[420px] w-full mx-auto">
                    <div className="mb-6">
                        <h1 className="text-[26px] font-extrabold tracking-tight text-[var(--sp-text)] mb-2">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-[13.5px] text-[var(--sp-text-2)] leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {children}
                </div>

                {/* Footer */}
                <div className="text-[11.5px] text-[var(--sp-text-3)] text-center mt-8">
                    © {new Date().getFullYear()} Spica — تمامی حقوق محفوظ است.
                </div>
            </div>

            {/* Right side — Visual */}
            <div
                className="hidden lg:flex flex-col items-center justify-center p-10 relative overflow-hidden"
                style={{
                    background:
                        'linear-gradient(135deg, var(--sp-navy, #0B1220) 0%, #111A2E 60%, #16213B 100%)',
                }}
            >
                {/* Glow circles */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(79,140,255,.25), transparent 65%)',
                        transform: 'translate(30%, -30%)',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(102,217,255,.15), transparent 65%)',
                        transform: 'translate(-30%, 30%)',
                    }}
                />

                {/* Content */}
                <div className="relative max-w-[440px] w-full">
                    <div
                        className="w-14 h-14 rounded-2xl grid place-items-center text-white mb-6"
                        style={{
                            background: 'var(--sp-gradient)',
                            boxShadow: '0 12px 32px -8px rgba(79,140,255,.6)',
                        }}
                    >
                        <Sparkles size={26} />
                    </div>

                    <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight mb-3">
                        فروشنده هوش مصنوعی
                        <br />
                        برای فروشگاه شما
                    </h2>

                    <p className="text-[14px] leading-relaxed mb-8" style={{ color: 'rgba(248,250,252,.7)' }}>
                        Spica مشتریان را می‌فهمد، محصول مناسب پیدا می‌کند، سفارش می‌سازد و
                        کار را به تیم شما واگذار می‌کند.
                    </p>

                    {/* Feature list */}
                    <div className="flex flex-col gap-3.5">
                        {[
                            { icon: MessageSquare, text: 'پاسخ هوشمند در تمام کانال‌های فروش' },
                            { icon: TrendingUp, text: 'تبدیل گفتگو به سفارش واقعی' },
                            { icon: Sparkles, text: 'یاد می‌گیرد و بهتر می‌شود' },
                        ].map((f) => (
                            <div key={f.text} className="flex items-center gap-3">
                                <div
                                    className="w-9 h-9 rounded-md grid place-items-center flex-none"
                                    style={{
                                        background: 'rgba(79,140,255,.15)',
                                        color: 'var(--sp-accent)',
                                        border: '1px solid rgba(79,140,255,.25)',
                                    }}
                                >
                                    <f.icon size={16} />
                                </div>
                                <span className="text-[13px] text-white/90 font-medium">{f.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div
                        className="mt-10 p-4 rounded-2xl flex items-center gap-4"
                        style={{
                            background: 'rgba(255,255,255,.04)',
                            border: '1px solid rgba(255,255,255,.08)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div className="flex-1">
                            <div className="text-[22px] font-extrabold text-white tabular-nums">
                                ۹۴٪
                            </div>
                            <div className="text-[11px] text-white/60 mt-0.5">
                                گفتگوهای موفق
                            </div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="flex-1">
                            <div className="text-[22px] font-extrabold text-white tabular-nums">
                                ۵ کانال
                            </div>
                            <div className="text-[11px] text-white/60 mt-0.5">
                                یکپارچه
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}