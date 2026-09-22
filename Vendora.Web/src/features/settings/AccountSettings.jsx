import { useState } from 'react';
import { Field, TextInput } from '@/components/ui/Field';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';

export default function AccountSettings() {
    const toast = useToast();
    const [form, setForm] = useState({
        name: 'علی رضایی',
        email: 'ali@spica.ir',
        password: '',
        confirm: '',
    });

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    return (
        <div className="max-w-[640px]">
            <div
                className="p-5 rounded-lg"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <div className="mb-5">
                    <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">
                        تنظیمات حساب
                    </h3>
                    <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                        اطلاعات شخصی و رمز عبور شما
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="نام و نام خانوادگی">
                        <TextInput value={form.name} onChange={set('name')} />
                    </Field>
                    <Field label="ایمیل">
                        <TextInput
                            value={form.email}
                            onChange={set('email')}
                            dir="ltr"
                            style={{ textAlign: 'left' }}
                        />
                    </Field>
                    <Field label="رمز عبور جدید">
                        <TextInput
                            type="password"
                            value={form.password}
                            onChange={set('password')}
                            placeholder="••••••••"
                        />
                    </Field>
                    <Field label="تکرار رمز عبور">
                        <TextInput
                            type="password"
                            value={form.confirm}
                            onChange={set('confirm')}
                            placeholder="••••••••"
                        />
                    </Field>
                </div>

                <div className="flex justify-end mt-6 pt-5" style={{ borderTop: '1px solid var(--sp-border)' }}>
                    <Button onClick={() => toast.success('تنظیمات حساب ذخیره شد.')}>
                        ذخیره تغییرات
                    </Button>
                </div>
            </div>
        </div>
    );
}