import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
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

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [remember, setRemember] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { login } = useAuth();
    const toast = useToast();
    const nav = useNavigate();

    const onFocus = (e) => {
        e.target.style.borderColor = 'var(--sp-primary)';
        e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
    };
    const onBlur = (e) => {
        e.target.style.borderColor = 'var(--sp-border)';
        e.target.style.boxShadow = 'none';
    };

    const submit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.trim() || !password.trim()) {
            setError('ایمیل و رمز عبور را وارد کنید.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('ایمیل معتبر وارد کنید.');
            return;
        }

        setLoading(true);
        await new Promise((r) => setTimeout(r, 700));
        login(email);
        toast.success('خوش آمدید 👋');
        nav('/', { replace: true });
    };

    return (
        <AuthLayout
            title="ورود به Spica"
            subtitle="برای مدیریت فروشگاه خود وارد شوید."
        >
            <form onSubmit={submit} className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                        ایمیل
                    </label>
                    <div className="relative">
                        <Mail
                            size={16}
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{ insetInlineStart: 12, color: 'var(--sp-text-3)' }}
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            placeholder="you@spica.ir"
                            className={inputCls}
                            style={inputStyle}
                            dir="ltr"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                            رمز عبور
                        </label>
                        <button
                            type="button"
                            className="text-[11.5px] font-semibold text-[var(--sp-primary)] hover:underline"
                        >
                            فراموشی رمز؟
                        </button>
                    </div>
                    <div className="relative">
                        <Lock
                            size={16}
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{ insetInlineStart: 12, color: 'var(--sp-text-3)' }}
                        />
                        <input
                            type={showPass ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            placeholder="••••••••"
                            className={inputCls}
                            style={{ ...inputStyle, paddingInlineEnd: 40 }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass((s) => !s)}
                            className="absolute top-1/2 -translate-y-1/2 p-1 rounded"
                            style={{ insetInlineEnd: 10, color: 'var(--sp-text-3)' }}
                        >
                            {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                    </div>
                </div>

                {/* Remember */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="w-4 h-4 accent-[var(--sp-primary)]"
                    />
                    <span className="text-[12.5px] text-[var(--sp-text-2)]">
            مرا به خاطر بسپار
          </span>
                </label>

                {/* Error */}
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

                {/* Submit */}
                <Button type="submit" full size="lg" disabled={loading}>
                    {loading ? 'در حال ورود...' : 'ورود به Spica'}
                </Button>

                {/* Footer */}
                <div className="text-center text-[12.5px] text-[var(--sp-text-2)] mt-2">
                    حساب ندارید؟{' '}
                    <Link
                        to="/signup"
                        className="font-semibold text-[var(--sp-primary)] hover:underline"
                    >
                        ثبت‌نام کنید
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}