import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Field, TextInput, TextArea } from '@/components/ui/Field';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { knowledge as initial } from '@/mocks/agent';

export default function KnowledgeBase() {
    const toast = useToast();
    const [form, setForm] = useState(initial);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onSave = () => {
        toast.success('اطلاعات کسب‌وکار ذخیره شد.');
    };

    return (
        <div className="max-w-[760px]">
            <div
                className="p-4 rounded-lg mb-4 flex items-start gap-3"
                style={{
                    background: 'linear-gradient(135deg, rgba(79,140,255,.06), rgba(102,217,255,.08))',
                    border: '1px solid rgba(79,140,255,.2)',
                }}
            >
                <div
                    className="w-9 h-9 rounded-md grid place-items-center flex-none"
                    style={{ background: 'var(--sp-gradient)', color: '#fff' }}
                >
                    <BookOpen size={16} />
                </div>
                <div className="text-[12.5px] leading-relaxed" style={{ color: 'var(--sp-primary-dark)' }}>
                    <strong className="block mb-0.5">دانش کسب‌وکار</strong>
                    این اطلاعات به Spica داده می‌شود تا دقیق و درست به مشتریان پاسخ دهد.
                </div>
            </div>

            <div
                className="p-5 rounded-lg"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <Field label="ساعات کاری">
                            <TextInput
                                value={form.workingHours}
                                onChange={set('workingHours')}
                            />
                        </Field>
                    </div>

                    <Field label="روش ارسال">
                        <TextInput
                            value={form.shippingMethod}
                            onChange={set('shippingMethod')}
                        />
                    </Field>

                    <Field label="زمان ارسال">
                        <TextInput
                            value={form.deliveryTime}
                            onChange={set('deliveryTime')}
                        />
                    </Field>

                    <div className="md:col-span-2">
                        <Field label="شرایط مرجوعی">
                            <TextArea
                                value={form.returnPolicy}
                                onChange={set('returnPolicy')}
                                rows={3}
                            />
                        </Field>
                    </div>

                    <div className="md:col-span-2">
                        <Field label="روش پرداخت">
                            <TextInput
                                value={form.paymentMethod}
                                onChange={set('paymentMethod')}
                            />
                        </Field>
                    </div>
                </div>

                <div className="flex justify-end mt-6 pt-5" style={{ borderTop: '1px solid var(--sp-border)' }}>
                    <Button onClick={onSave}>ذخیره اطلاعات</Button>
                </div>
            </div>
        </div>
    );
}