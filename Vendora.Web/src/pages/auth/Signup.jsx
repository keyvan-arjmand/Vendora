import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Store, Lock } from 'lucide-react';
import AuthLayout from '@/components/layout/AuthLayout';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

const inputCls =
    'h-11 ps-11 pe-3.5 rounded-md w-full outline-none text-[13px] transition-all';
const inputStyle = {
    background: 'var(--sp-surface)',
    border: '1px solid var(--sp-border)',
    color: 'var(--sp-text)',
};

function IconInput({ icon: Icon, ...props }) {
    const onFocus = (e) => {
        e.target.style.borderColor = 'var(--sp-primary)';
        e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
    };
    const onBlur = (e) => {
        e.target.style.borderColor = 'var(--sp-border)';
        e.target.style.boxShadow = 'none';
    };
    return (
        <div className="relative">
            <Icon
                size={16}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ insetInlineStart: 12, color: 'var(--sp-text-3)' }}
            />
            <input
                className={inputCls}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />
        </div>
    );
}

export default function Signup() {
    const [form, setForm] = useState({
        name: '',
        storeName: '',
        email: '',
        password: '',
        terms: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { signup } = useAuth();
    const toast = useToast();
    const nav = useNavigate();

    const set = (k) => (e) =>
        setForm((f) => ({
            ...f,
            [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }));

    const submit = async (e) => {
        e.preventDefault();
        setError('');

        if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
            setError('همه فیلدها را پر کنید.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setError('ایمیل معتبر وارد کنید.');
            return;
        }
        if (form.password.length < 6) {
            setError('رمز عبور باید حداقل ۶ کاراکتر باشد.');
            return;
        }
        if (!form.terms) {
            setError('پذیرش قوانین الزامی است.');
            return;
        }

        setLoading(true);
        await new Promise((r) => setTimeout(r, 800));
        signup(form);
        toast.success('حساب شما ساخته شد 🎉');
        nav('/onboarding', { replace: true });
    };

    return (
        <AuthLayout
            title="ساخت حساب کاربری"
            subtitle="در چند ثانیه فروشگاه خود را به Spica وصل کنید."
        >
            <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                        نام و نام خانوادگی
                    </label>
                    <IconInput
                        icon={User}
                        value={form.name}
                        onChange={set('name')}
                        placeholder="مثلاً علی رضایی"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                        نام فروشگاه
                    </label>
                    <IconInput
                        icon={Store}
                        value={form.storeName}
                        onChange={set('storeName')}
                        placeholder="مثلاً Spica Store"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                        ایمیل
                    </label>
                    <IconInput
                        icon={Mail}
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@spica.ir"
                        dir="ltr"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                        رمز عبور
                    </label>
                    <IconInput
                        icon={Lock}
                        type="password"
                        value={form.password}
                        onChange={set('password')}
                        placeholder="حداقل ۶ کاراکتر"
                    />
                </div>

                <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={form.terms}
                        onChange={set('terms')}
                        className="w-4 h-4 mt-0.5 accent-[var(--sp-primary)] flex-none"
                    />
                    <span className="text-[12.5px] text-[var(--sp-text-2)] leading-relaxed">
            با{' '}
                        <span className="text-[var(--sp-primary)] font-semibold">
              قوانین و شرایط
            </span>{' '}
                        Spica موافقم.
          </span>
                </label>

                {error && (
                    <div
                        className="p-3 rounded-md text-[12.5px] font-medium"
                        style={{
                            background: 'rgba(239,68,68,.08)',
                            color: 'var(--sp-danger)',
                            border: '1px solid rgba(239,68,68,.2)',
                        }}
                    >
                        {error}
                    </div>
                )}

                <Button type="submit" full size="lg" disabled={loading}>
                    {loading ? 'در حال ساخت حساب...' : 'ساخت حساب'}
                </Button>

                <div className="text-center text-[12.5px] text-[var(--sp-text-2)] mt-2">
                    قبلاً ثبت‌نام کرده‌اید؟{' '}
                    <Link
                        to="/login"
                        className="font-semibold text-[var(--sp-primary)] hover:underline"
                    >
                        ورود
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}