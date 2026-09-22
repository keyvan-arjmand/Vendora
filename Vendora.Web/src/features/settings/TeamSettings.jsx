import { UserPlus } from 'lucide-react';
import Button from '@/components/ui/Button';
import Avatar from '@/components/shared/Avatar';
import { Table, THead, TH, TBody, TR, TD } from '@/components/ui/Table';
import { useToast } from '@/context/ToastContext';

const TEAM = [
    { name: 'علی رضایی', role: 'مدیر فروشگاه', status: 'active' },
    { name: 'مریم صادقی', role: 'پشتیبان فروش', status: 'active' },
    { name: 'حسین نوری', role: 'انبار', status: 'pending' },
];

export default function TeamSettings() {
    const toast = useToast();

    return (
        <div className="max-w-[860px]">
            <div
                className="rounded-lg overflow-hidden"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-soft)',
                }}
            >
                <div className="flex items-center justify-between gap-4 p-5 flex-wrap" style={{ borderBottom: '1px solid var(--sp-border)' }}>
                    <div>
                        <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">اعضای تیم</h3>
                        <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">
                            کاربرانی که به پنل دسترسی دارند
                        </p>
                    </div>
                    <Button
                        icon={UserPlus}
                        variant="ghost"
                        size="sm"
                        onClick={() => toast.success('دعوت‌نامه ارسال شد.')}
                    >
                        دعوت عضو
                    </Button>
                </div>

                <Table>
                    <THead>
                        <TH width={280}>کاربر</TH>
                        <TH>نقش</TH>
                        <TH>وضعیت</TH>
                    </THead>
                    <TBody>
                        {TEAM.map((m) => (
                            <TR key={m.name}>
                                <TD strong>
                                    <div className="flex items-center gap-3">
                                        <Avatar name={m.name} size={36} />
                                        <span>{m.name}</span>
                                    </div>
                                </TD>
                                <TD>{m.role}</TD>
                                <TD>
                                    {m.status === 'active' ? (
                                        <span
                                            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                                            style={{ color: 'var(--sp-success)', background: 'rgba(16,185,129,.1)' }}
                                        >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      فعال
                    </span>
                                    ) : (
                                        <span
                                            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                                            style={{ color: 'var(--sp-warning)', background: 'rgba(245,158,11,.1)' }}
                                        >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      در انتظار تأیید
                    </span>
                                    )}
                                </TD>
                            </TR>
                        ))}
                    </TBody>
                </Table>
            </div>
        </div>
    );
}