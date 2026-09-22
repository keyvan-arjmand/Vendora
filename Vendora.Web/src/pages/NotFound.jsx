import { Link } from 'react-router-dom';
import { Home, SearchX } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="py-24 text-center flex flex-col items-center">
            <div
                className="w-20 h-20 rounded-2xl grid place-items-center mb-5"
                style={{
                    background: 'var(--sp-surface-2)',
                    border: '1px solid var(--sp-border)',
                    color: 'var(--sp-text-3)',
                }}
            >
                <SearchX size={34} />
            </div>
            <h1 className="text-[24px] font-extrabold tracking-tight text-[var(--sp-text)] mb-2">
                صفحه پیدا نشد
            </h1>
            <p className="text-[13px] text-[var(--sp-text-2)] mb-6 max-w-[340px] leading-relaxed">
                صفحه‌ای که می‌خواهید ببینید وجود ندارد یا منتقل شده است.
            </p>
            <Link to="/">
                <Button icon={Home}>بازگشت به داشبورد</Button>
            </Link>
        </div>
    );
}