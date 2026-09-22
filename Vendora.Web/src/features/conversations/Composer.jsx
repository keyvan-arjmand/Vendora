import { useState } from 'react';
import { Send } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CHANNELS } from '@/lib/constants';

export default function Composer({ conv, onSend }) {
    const [text, setText] = useState('');
    const humanActive = conv.aiStatus === 'human';
    const ch = CHANNELS[conv.channel];
    const ChIcon = Icons[ch?.icon] || Icons.Circle;

    const submit = () => {
        if (!text.trim()) return;
        onSend(text);
        setText('');
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit();
        }
    };

    return (
        <div
            className="flex-none px-4 py-3.5 flex flex-col gap-2"
            style={{
                background: 'var(--sp-surface)',
                borderTop: '1px solid var(--sp-border)',
            }}
        >
            <div className="flex items-center gap-2">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={onKeyDown}
                    disabled={!humanActive}
                    placeholder={
                        humanActive
                            ? 'پاسخ خود را بنویسید...'
                            : 'Spica در حال پاسخگویی است...'
                    }
                    className="flex-1 min-w-0 h-11 px-4 rounded-xl outline-none text-[13px] transition-all disabled:cursor-not-allowed disabled:text-[var(--sp-text-3)] disabled:bg-[var(--sp-surface-3)]"
                    style={{
                        background: 'var(--sp-surface-2)',
                        border: '1px solid var(--sp-border)',
                        color: 'var(--sp-text)',
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = 'var(--sp-primary)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
                        e.target.style.background = 'var(--sp-surface)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = 'var(--sp-border)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'var(--sp-surface-2)';
                    }}
                />
                <button
                    type="button"
                    onClick={submit}
                    disabled={!humanActive || !text.trim()}
                    className="w-11 h-11 rounded-xl grid place-items-center text-white flex-none transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-px"
                    style={{
                        background: 'var(--sp-gradient)',
                        boxShadow: '0 6px 18px -4px rgba(79,140,255,.4)',
                    }}
                >
                    <Send size={18} />
                </button>
            </div>

            {!humanActive && (
                <div className="flex items-center gap-1.5 px-1 text-[11.5px] text-[var(--sp-text-3)]">
                    <ChIcon size={12} style={{ color: ch?.color }} />
                    پاسخ از طریق {ch?.nameFa} ارسال می‌شود
                </div>
            )}
        </div>
    );
}