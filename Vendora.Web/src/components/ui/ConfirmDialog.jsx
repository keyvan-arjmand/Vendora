import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';

export default function ConfirmDialog({
                                          open,
                                          onClose,
                                          onConfirm,
                                          title = 'تأیید عملیات',
                                          message,
                                          confirmText = 'تأیید',
                                          cancelText = 'انصراف',
                                          tone = 'danger',
                                      }) {
    const toneColors = {
        danger: { bg: 'rgba(239,68,68,.1)', color: 'var(--sp-danger)' },
        warning: { bg: 'rgba(245,158,11,.1)', color: 'var(--sp-warning)' },
    };
    const t = toneColors[tone];

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={title}
            size="sm"
            footer={
                <>
                    <button
                        onClick={onClose}
                        className="h-10 px-4 rounded-md text-[13px] font-semibold transition-all text-[var(--sp-text-2)] hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm?.();
                            onClose();
                        }}
                        className="h-10 px-4 rounded-md text-[13px] font-semibold text-white transition-all"
                        style={{
                            background: tone === 'danger' ? 'var(--sp-danger)' : 'var(--sp-warning)',
                            boxShadow: tone === 'danger'
                                ? '0 4px 14px -4px rgba(239,68,68,.4)'
                                : '0 4px 14px -4px rgba(245,158,11,.4)',
                        }}
                    >
                        {confirmText}
                    </button>
                </>
            }
        >
            <div className="flex items-start gap-3">
                <div
                    className="w-11 h-11 rounded-xl grid place-items-center flex-none"
                    style={{ background: t.bg, color: t.color }}
                >
                    <AlertTriangle size={20} />
                </div>
                <p className="text-[13.5px] text-[var(--sp-text-2)] leading-relaxed pt-2">
                    {message}
                </p>
            </div>
        </Modal>
    );
}