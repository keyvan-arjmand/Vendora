import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Store,
    Package,
    Send,
    Check,
    ArrowLeft,
    ArrowRight,
    Plus,
    Sparkles,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import * as Icons from 'lucide-react';
import { CHANNELS, CHANNEL_ORDER } from '@/lib/constants';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

const STEPS = [
    { key: 'store', label: 'فروشگاه', icon: Store },
    { key: 'product', label: 'محصولات', icon: Package },
    { key: 'channel', label: 'کانال فروش', icon: Send },
];

export default function Onboarding() {
    const { user, completeOnboarding } = useAuth();
    const toast = useToast();
    const nav = useNavigate();

    const [step, setStep] = useState(0);
    const [data, setData] = useState({
        storeName: user?.storeName || '',
        category: 'کفش',
        productAdded: false,
        channel: 'telegram',
    });

    const next = () => {
        if (step < 2) setStep((s) => s + 1);
        else finish();
    };

    const back = () => step > 0 && setStep((s) => s - 1);

    const finish = () => {
        completeOnboarding();
        toast.success('فروشگاه شما آماده است 🎉');
        nav('/', { replace: true });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-5"
            style={{ background: 'var(--sp-bg)' }}
        >
            {/* Glow */}
            <div
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, rgba(79,140,255,.08), transparent 65%)',
                }}
            />

            <div className="w-full max-w-[560px] relative">
                {/* Header */}
                <div className="text-center mb-8">
                    <div
                        className="w-14 h-14 rounded-2xl grid place-items-center mx-auto mb-4"
                        style={{
                            background: 'var(--sp-gradient)',
                            boxShadow: '0 12px 32px -8px rgba(79,140,255,.5)',
                            color: '#fff',
                        }}
                    >
                        <Sparkles size={24} />
                    </div>
                    <h1 className="text-[22px] font-extrabold tracking-tight text-[var(--sp-text)] mb-2">
                        فروشگاهت را برای Spica آماده کن
                    </h1>
                    <p className="text-[13px] text-[var(--sp-text-2)]">
                        ۳ قدم کوتاه تا اولین فروش هوشمند
                    </p>
                </div>

                {/* Stepper */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    {STEPS.map((s, i) => {
                        const done = i < step;
                        const current = i === step;
                        const Icon = s.icon;
                        return (
                            <div key={s.key} className="flex items-center gap-2">
                                <div
                                    className="w-9 h-9 rounded-full grid place-items-center text-[12px] font-bold transition-all"
                                    style={{
                                        background: current
                                            ? 'var(--sp-gradient)'
                                            : done
                                                ? 'var(--sp-success)'
                                                : 'var(--sp-surface)',
                                        color:
                                            current || done ? '#fff' : 'var(--sp-text-3)',
                                        border: `1px solid ${
                                            current || done ? 'transparent' : 'var(--sp-border)'
                                        }`,
                                        boxShadow: current
                                            ? '0 6px 16px -4px rgba(79,140,255,.5)'
                                            : 'none',
                                    }}
                                >
                                    {done ? <Check size={15} strokeWidth={3} /> : <Icon size={15} />}
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div
                                        className="w-8 h-0.5 rounded"
                                        style={{
                                            background: done ? 'var(--sp-success)' : 'var(--sp-border)',
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Card */}
                <div
                    className="p-6 rounded-2xl animate-fadeUp"
                    style={{
                        background: 'var(--sp-surface)',
                        border: '1px solid var(--sp-border)',
                        boxShadow: 'var(--sp-shadow-card)',
                    }}
                    key={step}
                >
                    {step === 0 && (
                        <StepStore data={data} setData={setData} />
                    )}
                    {step === 1 && (
                        <StepProduct data={data} setData={setData} />
                    )}
                    {step === 2 && (
                        <StepChannel data={data} setData={setData} />
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 mt-6">
                    <button
                        onClick={back}
                        disabled={step === 0}
                        className="inline-flex items-center gap-1.5 h-10 px-4 rounded-md text-[13px] font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed text-[var(--sp-text-2)] hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        <ArrowRight size={15} />
                        قبلی
                    </button>

                    <div className="text-[12px] text-[var(--sp-text-3)] font-medium">
                        قدم {step + 1} از ۳
                    </div>

                    <Button
                        icon={step === 2 ? Check : undefined}
                        iconRight={step === 2 ? undefined : ArrowLeft}
                        onClick={next}
                    >
                        {step === 2 ? 'شروع اولین فروش' : 'بعدی'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

/* ------------ Steps ------------ */

function StepStore({ data, setData }) {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-[16px] font-bold text-[var(--sp-text)] mb-1">
                    فروشگاهت را معرفی کن
                </h2>
                <p className="text-[12.5px] text-[var(--sp-text-2)]">
                    این اطلاعات به Spica کمک می‌کند بهتر به مشتریان پاسخ دهد.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                    نام فروشگاه
                </label>
                <input
                    value={data.storeName}
                    onChange={(e) => setData((d) => ({ ...d, storeName: e.target.value }))}
                    placeholder="مثلاً Spica Store"
                    className="h-11 px-3.5 rounded-md w-full outline-none text-[13px] transition-all"
                    style={{
                        background: 'var(--sp-surface)',
                        border: '1px solid var(--sp-border)',
                        color: 'var(--sp-text)',
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = 'var(--sp-primary)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = 'var(--sp-border)';
                        e.target.style.boxShadow = 'none';
                    }}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                    نوع کسب‌وکار
                </label>
                <div className="flex gap-2 flex-wrap">
                    {['کفش', 'پوشاک', 'لوازم خانگی', 'دیجیتال'].map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setData((d) => ({ ...d, category: c }))}
                            className="h-9 px-3.5 rounded-full text-[12.5px] font-medium transition-all border"
                            style={{
                                background:
                                    data.category === c ? 'var(--sp-primary)' : 'var(--sp-surface)',
                                color: data.category === c ? '#fff' : 'var(--sp-text-2)',
                                borderColor:
                                    data.category === c ? 'transparent' : 'var(--sp-border)',
                            }}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StepProduct({ data, setData }) {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-[16px] font-bold text-[var(--sp-text)] mb-1">
                    محصولاتت را آماده کن
                </h2>
                <p className="text-[12.5px] text-[var(--sp-text-2)]">
                    Spica برای پیشنهاد دقیق محصول، به اطلاعات واقعی فروشگاهت نیاز دارد.
                </p>
            </div>

            {!data.productAdded ? (
                <div
                    className="p-8 rounded-xl flex flex-col items-center text-center"
                    style={{
                        border: '2px dashed var(--sp-border-2)',
                        background: 'var(--sp-surface-2)',
                    }}
                >
                    <div
                        className="w-12 h-12 rounded-xl grid place-items-center mb-3"
                        style={{ background: 'var(--sp-surface)', color: 'var(--sp-text-3)' }}
                    >
                        <Package size={22} />
                    </div>
                    <div className="text-[13.5px] font-bold text-[var(--sp-text)] mb-1">
                        هنوز محصولی اضافه نکردی
                    </div>
                    <p className="text-[11.5px] text-[var(--sp-text-3)] max-w-[280px] leading-relaxed mb-4">
                        یک محصول نمونه اضافه کن یا از فایل Excel وارد کن.
                    </p>
                    <div className="flex gap-2">
                        <Button
                            icon={Plus}
                            size="sm"
                            onClick={() => setData((d) => ({ ...d, productAdded: true }))}
                        >
                            افزودن محصول
                        </Button>
                        <button
                            onClick={() => setData((d) => ({ ...d, productAdded: true }))}
                            className="h-9 px-3 rounded-md text-[12px] font-semibold text-[var(--sp-text-2)] transition-all"
                            style={{
                                background: 'var(--sp-surface)',
                                border: '1px solid var(--sp-border)',
                            }}
                        >
                            Import از Excel
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className="p-4 rounded-xl flex items-center gap-3"
                    style={{
                        background: 'rgba(16,185,129,.06)',
                        border: '1px solid rgba(16,185,129,.25)',
                    }}
                >
                    <div
                        className="w-10 h-10 rounded-xl grid place-items-center flex-none"
                        style={{ background: 'var(--sp-success)', color: '#fff' }}
                    >
                        <Check size={18} strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                        <div className="text-[13.5px] font-bold text-[var(--sp-text)] mb-0.5">
                            محصول نمونه اضافه شد
                        </div>
                        <div className="text-[11.5px] text-[var(--sp-text-3)]">
                            Nike Air Max — ۲,۸۹۰,۰۰۰ تومان
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function StepChannel({ data, setData }) {
    const available = CHANNEL_ORDER.filter(
        (k) => CHANNELS[k].status === 'connected' || CHANNELS[k].status === 'pending'
    );

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-[16px] font-bold text-[var(--sp-text)] mb-1">
                    کانال فروش را وصل کن
                </h2>
                <p className="text-[12.5px] text-[var(--sp-text-2)]">
                    Spica روی این کانال به مشتریان پاسخ می‌دهد. الان Telegram را وصل کن.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                {available.slice(0, 4).map((k) => {
                    const c = CHANNELS[k];
                    const Icon = Icons[c.icon] || Icons.Circle;
                    const selected = data.channel === k;

                    return (
                        <button
                            key={k}
                            type="button"
                            onClick={() => setData((d) => ({ ...d, channel: k }))}
                            className="flex items-center gap-3 p-3.5 rounded-xl transition-all text-start border"
                            style={{
                                background: selected ? 'rgba(79,140,255,.06)' : 'var(--sp-surface)',
                                borderColor: selected ? 'var(--sp-primary)' : 'var(--sp-border)',
                                boxShadow: selected ? '0 0 0 3px rgba(79,140,255,.12)' : 'none',
                            }}
                        >
                            <div
                                className="w-11 h-11 rounded-xl grid place-items-center text-white flex-none"
                                style={{
                                    background: c.color,
                                    boxShadow: `0 6px 16px -4px ${c.shadow || c.color}55`,
                                }}
                            >
                                <Icon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[13.5px] font-bold text-[var(--sp-text)]">
                                    {c.nameFa}
                                </div>
                                <div className="text-[11.5px] text-[var(--sp-text-3)]">
                                    {c.name}
                                </div>
                            </div>
                            <div
                                className="w-5 h-5 rounded-full grid place-items-center flex-none transition-all"
                                style={{
                                    background: selected ? 'var(--sp-primary)' : 'transparent',
                                    border: `1.5px solid ${
                                        selected ? 'var(--sp-primary)' : 'var(--sp-border-2)'
                                    }`,
                                }}
                            >
                                {selected && <Check size={11} strokeWidth={3} color="#fff" />}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Final message */}
            <div
                className="p-4 rounded-xl mt-2"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(79,140,255,.06), rgba(102,217,255,.08))',
                    border: '1px solid rgba(79,140,255,.2)',
                }}
            >
                <div className="text-[12.5px] leading-relaxed" style={{ color: 'var(--sp-primary-dark)' }}>
                    <strong className="block mb-2">فروشگاهت آماده است ✅</strong>
                    <div className="flex flex-col gap-1">
                        {[
                            'محصولات را می‌شناسد',
                            'به مشتری پاسخ می‌دهد',
                            'موجودی را بررسی می‌کند',
                            'سفارش ایجاد می‌کند',
                        ].map((t) => (
                            <div key={t} className="flex items-center gap-1.5">
                                <Check size={12} strokeWidth={3} />
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}