import { useState } from 'react';
import { Field, TextInput } from '@/components/ui/Field';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { store as initial } from '@/mocks/agent';

export default function StoreSettings() {
    const toast = useToast();
    const [form, setForm] = useState(initial);
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    return (
        <div className="max-w-[760px]">
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
                        اطلاعات فروشگاه
                    </h3>
                    <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                        این اطلاعات در فاکتور و ارتباط با مشتریان استفاده می‌شود.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="نام فروشگاه">
                        <TextInput value={form.name} onChange={set('name')} />
                    </Field>
                    <Field label="دسته‌بندی">
                        <TextInput value={form.category} onChange={set('category')} />
                    </Field>
                    <Field label="شماره تماس">
                        <TextInput value={form.phone} onChange={set('phone')} />
                    </Field>
                    <Field label="واحد پول">
                        <TextInput value={form.currency} disabled />
                    </Field>
                    <div className="md:col-span-2">
                        <Field label="آدرس">
                            <TextInput value={form.address} onChange={set('address')} />
                        </Field>
                    </div>
                </div>

                <div className="flex justify-end mt-6 pt-5" style={{ borderTop: '1px solid var(--sp-border)' }}>
                    <Button onClick={() => toast.success('اطلاعات فروشگاه ذخیره شد.')}>
                        ذخیره تغییرات
                    </Button>
                </div>
            </div>
        </div>
    );
}