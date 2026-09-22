import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Field, TextInput } from '@/components/ui/Field';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { salesRules as initial } from '@/mocks/agent';
import { money, fa } from '@/lib/format';

export default function SalesRules() {
    const toast = useToast();
    const [form, setForm] = useState({
        maxDiscount: String(initial.maxDiscount),
        approvalOrderAmount: String(initial.approvalOrderAmount),
        approvalDiscount: String(initial.approvalDiscount),
        tehranShipping: initial.tehranShipping,
        cityShipping: String(initial.cityShipping),
    });

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onSave = () => {
        toast.success('قوانین فروش ذخیره شد.');
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
                    <ShieldCheck size={16} />
                </div>
                <div className="text-[12.5px] leading-relaxed" style={{ color: 'var(--sp-primary-dark)' }}>
                    <strong className="block mb-0.5">قوانین فروش</strong>
                    این قوانین تعیین می‌کنند Spica در گفتگو با مشتری تا چه حد اختیار دارد. اگر درخواست مشتری خارج از این قوانین باشد، به شما ارجاع داده می‌شود.
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
                    <Field label="حداکثر تخفیف" hint="Spica بیشتر از این مقدار تخفیف نمی‌دهد">
                        <TextInput
                            value={form.maxDiscount}
                            onChange={set('maxDiscount')}
                            placeholder="10"
                        />
                    </Field>

                    <Field
                        label="سفارش بیشتر از"
                        hint="نیازمند تأیید انسان"
                    >
                        <TextInput
                            value={form.approvalOrderAmount}
                            onChange={set('approvalOrderAmount')}
                            placeholder="5000000"
                        />
                    </Field>

                    <Field
                        label="تخفیف بیشتر از"
                        hint="نیازمند تأیید انسان"
                    >
                        <TextInput
                            value={form.approvalDiscount}
                            onChange={set('approvalDiscount')}
                            placeholder="10"
                        />
                    </Field>

                    <Field label="ارسال تهران">
                        <TextInput
                            value={form.tehranShipping}
                            onChange={set('tehranShipping')}
                            placeholder="رایگان"
                        />
                    </Field>

                    <Field label="ارسال شهرستان">
                        <TextInput
                            value={form.cityShipping}
                            onChange={set('cityShipping')}
                            placeholder="100000"
                        />
                    </Field>
                </div>

                <div className="flex justify-end mt-6 pt-5" style={{ borderTop: '1px solid var(--sp-border)' }}>
                    <Button onClick={onSave}>ذخیره قوانین</Button>
                </div>
            </div>
        </div>
    );
}