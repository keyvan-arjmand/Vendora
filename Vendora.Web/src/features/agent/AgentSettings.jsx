import { useState } from 'react';
import { Sparkles, RadioTower } from 'lucide-react';
import { Field, TextInput } from '@/components/ui/Field';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import * as Icons from 'lucide-react';
import { useAgent } from '@/context/AgentContext';
import { useToast } from '@/context/ToastContext';
import { CHANNELS, CHANNEL_ORDER } from '@/lib/constants';

export default function AgentSettings() {
    const { name, setName, tone, setTone, style, setStyle } = useAgent();
    const toast = useToast();

    const [local, setLocal] = useState({ name, tone, style });

    const onSave = () => {
        setName(local.name);
        setTone(local.tone);
        setStyle(local.style);
        toast.success('تنظیمات فروشنده AI ذخیره شد.');
    };

    const activeChannels = CHANNEL_ORDER.filter(
        (k) => CHANNELS[k].status === 'connected'
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-4">
            {/* Form */}
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
                        تنظیمات فروشنده
                    </h3>
                    <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                        لحن و رفتار Spica در گفتگو با مشتریان
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <Field label="نام فروشنده AI">
                            <TextInput
                                value={local.name}
                                onChange={(e) => setLocal((s) => ({ ...s, name: e.target.value }))}
                                placeholder="مثلاً آرین"
                            />
                        </Field>
                    </div>

                    <Field label="لحن گفتگو">
                        <Select
                            value={local.tone}
                            onChange={(e) => setLocal((s) => ({ ...s, tone: e.target.value }))}
                            options={[
                                { value: 'دوستانه', label: 'دوستانه' },
                                { value: 'رسمی', label: 'رسمی' },
                                { value: 'انرژیک', label: 'انرژیک' },
                            ]}
                        />
                    </Field>

                    <Field label="سبک پاسخ">
                        <Select
                            value={local.style}
                            onChange={(e) => setLocal((s) => ({ ...s, style: e.target.value }))}
                            options={[
                                { value: 'کوتاه و مستقیم', label: 'کوتاه و مستقیم' },
                                { value: 'مفصل و توضیحی', label: 'مفصل و توضیحی' },
                            ]}
                        />
                    </Field>

                    <Field label="زبان">
                        <Select
                            value="fa"
                            onChange={() => {}}
                            options={[{ value: 'fa', label: 'فارسی' }]}
                        />
                    </Field>
                </div>

                <div className="flex justify-end mt-6 pt-5" style={{ borderTop: '1px solid var(--sp-border)' }}>
                    <Button onClick={onSave}>ذخیره تغییرات</Button>
                </div>
            </div>

            {/* Preview */}
            <div
                className="p-5 rounded-lg"
                style={{
                    background:
                        'linear-gradient(160deg, var(--sp-surface) 0%, rgba(79,140,255,.03) 100%)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-11 h-11 rounded-xl grid place-items-center text-white flex-none"
                        style={{
                            background: 'var(--sp-gradient)',
                            boxShadow: '0 6px 18px -4px rgba(79,140,255,.45)',
                        }}
                    >
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <div className="text-[14px] font-bold text-[var(--sp-text)]">
                            {local.name || 'آرین'}
                        </div>
                        <div className="text-[11.5px] text-[var(--sp-text-3)]">
                            پیش‌نمایش گفتگو
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-start">
                        <div
                            className="px-3.5 py-2.5 rounded-2xl text-[12.5px] max-w-[80%]"
                            style={{
                                background: 'var(--sp-surface)',
                                border: '1px solid var(--sp-border)',
                                borderStartStartRadius: 5,
                            }}
                        >
                            سلام، یه کفش روزمره می‌خوام.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div
                            className="px-3.5 py-2.5 rounded-2xl text-[12.5px] max-w-[80%]"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(79,140,255,.1), rgba(102,217,255,.15))',
                                color: 'var(--sp-primary-dark)',
                                borderStartEndRadius: 5,
                            }}
                        >
                            سلام 👋 سایزتون چنده؟
                        </div>
                    </div>
                </div>

                <div className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--sp-text-3)] mt-5 mb-3">
                    کانال‌های فعال ({activeChannels.length})
                </div>
                <div className="flex flex-col gap-2">
                    {activeChannels.map((k) => {
                        const c = CHANNELS[k];
                        const Icon = Icons[c.icon] || Icons.Circle;
                        return (
                            <div
                                key={k}
                                className="flex items-center gap-2.5 p-2.5 rounded-md"
                                style={{
                                    background: 'var(--sp-surface)',
                                    border: '1px solid var(--sp-border)',
                                }}
                            >
                                <div
                                    className="w-8 h-8 rounded-md grid place-items-center text-white flex-none"
                                    style={{ background: c.color }}
                                >
                                    <Icon size={15} />
                                </div>
                                <span className="text-[12.5px] font-semibold flex-1">
                  {c.nameFa}
                </span>
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{
                                        background: 'var(--sp-success)',
                                        boxShadow: '0 0 0 3px rgba(16,185,129,.15)',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}