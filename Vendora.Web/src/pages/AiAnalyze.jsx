import { useState } from 'react';
import { Search, Package, DollarSign, ShoppingCart } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import AiInputPanel from '@/features/ai/AiInputPanel';
import AiResultPanel from '@/features/ai/AiResultPanel';

const MOCK_RESULT = {
    intent: 'purchase',
    product: 'Nike Air Max',
    size: 42,
    color: 'مشکی',
    budget: 3000000,
    confidence: 94,
    actions: [
        { icon: Search, label: 'جستجوی محصول در فروشگاه', status: 'done' },
        { icon: Package, label: 'بررسی موجودی سایز ۴۲', status: 'done' },
        { icon: DollarSign, label: 'دریافت قیمت از Backend', status: 'done' },
        { icon: ShoppingCart, label: 'آماده ساخت سفارش', status: 'pending' },
    ],
};

export default function AiAnalyze() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const analyze = (text) => {
        if (!text.trim()) return;
        setLoading(true);
        setResult(null);

        setTimeout(() => {
            setResult(MOCK_RESULT);
            setLoading(false);
        }, 900);
    };

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="AI و تحلیل"
                subtitle="پیام مشتری را وارد کنید تا Spica آن را تحلیل کند و ببینید چه اتفاقی می‌افتد."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <AiInputPanel onAnalyze={analyze} loading={loading} />
                <AiResultPanel result={loading ? null : result} />
            </div>
        </div>
    );
}