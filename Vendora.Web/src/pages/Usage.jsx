import { useState } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const SAMPLES = [
    'یه کفش روزمره زیر ۳ میلیون می‌خوام سایزم ۴۲ هست',
    'قیمت Nike Air Max چنده؟',
    'سفارشم کی می‌رسه؟',
    'تخفیف دارید روی مدل مشکی؟',
];

export default function AiInputPanel({ onAnalyze, loading }) {
    const [text, setText] = useState('');

    return (
        <div
            className="p-5 rounded-lg"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="w-10 h-10 rounded-xl grid place-items-center text-white flex-none"
                    style={{
                        background: 'var(--sp-gradient)',
                        boxShadow: '0 6px 18px -4px rgba(79,140,255,.45)',
                    }}
                >
                    <Sparkles size={18} />
                </div>
                <div>
                    <div className="text-[14px] font-bold text-[var(--sp-text)]">
                        تحلیل گفتگو
                    </div>
                    <div className="text-[11.5px] text-[var(--sp-text-3)]">
                        پیام مشتری را وارد کنید تا Spica آن را تحلیل کند.
                    </div>
                </div>
            </div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                placeholder="متن پیام مشتری..."
                className="w-full px-3.5 py-3 rounded-md outline-none text-[13px] transition-all resize-vertical leading-relaxed mb-3"
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

            <div className="flex flex-wrap gap-1.5 mb-4">
                {SAMPLES.map((s) => (
                    <button
                        key={s}
                        onClick={() => setText(s)}
                        className="text-[11.5px] px-2.5 py-1 rounded-full transition-all"
                        style={{
                            background: 'var(--sp-surface-2)',
                            color: 'var(--sp-text-2)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        {s}
                    </button>
                ))}
            </div>

            <div className="flex justify-end">
                <Button icon={Wand2} onClick={() => onAnalyze(text)} disabled={!text.trim() || loading}>
                    {loading ? 'در حال تحلیل...' : 'تحلیل کن'}
                </Button>
            </div>
        </div>
    );
}