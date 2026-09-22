import { useState } from 'react';
import Switch from '@/components/ui/Switch';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';

const ITEMS = [
    { key: 'order', label: 'سفارش جدید', desc: 'وقتی مشتری سفارش ثبت می‌کند' },
    { key: 'payment', label: 'پرداخت موفق', desc: 'وقتی پرداخت تأیید می‌شود' },
    { key: 'handoff', label: 'نیاز به انسان', desc: 'وقتی Spica نمی‌تواند پاسخ دهد' },
    { key: 'daily', label: 'گزارش روزانه', desc: 'خلاصه فروش هر روز' },
];

export default function NotificationSettings() {
    const toast = useToast();
    const [state, setState] = useState({
        order: true,
        payment: true,
        handoff: true,
        daily: false,
    });

    const set = (k) => (v) => setState((s) => ({ ...s, [k]: v }));

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
                        اعلان‌ها
                    </h3>
                    <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                        انتخاب کنید چه زمانی به شما اطلاع داده شود.
                    </p>
                </div>

                <div className="flex flex-col">
                    {ITEMS.map((it, i) => (
                        <div
                            key={it.key}
                            className="flex items-center justify-between gap-4 py-4"
                            style={{ borderTop: i === 0 ? 'none' : '1px solid var(--sp-border)' }}
                        >
                            <div>
                                <div className="text-[13px] font-semibold text-[var(--sp-text)]">
                                    {it.label}
                                </div>
                                <div className="text-[11.5px] text-[var(--sp-text-3)] mt-0.5">
                                    {it.desc}
                                </div>
                            </div>
                            <Switch checked={state[it.key]} onChange={set(it.key)} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-5 pt-5" style={{ borderTop: '1px solid var(--sp-border)' }}>
                    <Button onClick={() => toast.success('تنظیمات اعلان ذخیره شد.')}>
                        ذخیره تغییرات
                    </Button>
                </div>
            </div>
        </div>
    );
}