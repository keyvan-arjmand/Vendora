const LABELS = {
    'Order Created': 'سفارش ثبت شد',
    'Payment Received': 'پرداخت دریافت شد',
    'Order Confirmed': 'سفارش تأیید شد',
    'Processing': 'در حال پردازش',
    'Completed': 'تکمیل شد',
    'Shipped': 'ارسال شد',
    'Delivered': 'تحویل داده شد',
};

export default function OrderTimeline({ timeline = [] }) {
    return (
        <ol className="flex flex-col">
            {timeline.map((t, i) => {
                const isLast = i === timeline.length - 1;
                const isDone = !isLast;

                return (
                    <li
                        key={i}
                        className="flex items-start gap-3 text-[12.5px] py-1.5 relative"
                        style={{
                            color: isLast ? 'var(--sp-primary)' : 'var(--sp-text-2)',
                            fontWeight: isLast ? 700 : 500,
                        }}
                    >
            <span
                className="w-2.5 h-2.5 rounded-full flex-none mt-1.5 relative z-10"
                style={{
                    background: isLast
                        ? 'var(--sp-primary)'
                        : 'var(--sp-success)',
                    boxShadow: isLast
                        ? '0 0 0 4px rgba(79,140,255,.15)'
                        : '0 0 0 3px rgba(16,185,129,.15)',
                }}
            />
                        {!isLast && (
                            <span
                                className="absolute start-[4.5px] top-[22px] bottom-[-6px] w-px"
                                style={{ background: 'var(--sp-success)' }}
                            />
                        )}
                        <span>{LABELS[t] || t}</span>
                    </li>
                );
            })}
        </ol>
    );
}