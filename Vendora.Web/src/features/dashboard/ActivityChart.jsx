import { fa } from '@/lib/format';
import { activity } from '@/mocks/activity';

export default function ActivityChart() {
    const max = Math.max(...activity.map((d) => d.conversations));

    return (
        <div
            className="p-5 rounded-lg h-full"
            style={{
                background: 'var(--sp-surface)',
                border: '1px solid var(--sp-border)',
                boxShadow: 'var(--sp-shadow-soft)',
            }}
        >
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                    <h3 className="text-[14.5px] font-bold text-[var(--sp-text)]">
                        گفتگوها و سفارش‌ها
                    </h3>
                    <p className="text-[12px] text-[var(--sp-text-3)] mt-0.5">۷ روز اخیر</p>
                </div>
                <div className="flex gap-4 text-[11.5px] text-[var(--sp-text-2)] font-medium">
          <span className="inline-flex items-center gap-1.5">
            <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--sp-primary)' }}
            />
            گفتگو
          </span>
                    <span className="inline-flex items-center gap-1.5">
            <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--sp-accent)' }}
            />
            سفارش
          </span>
                </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-[210px]">
                {activity.map((d, i) => {
                    const h1 = Math.round((d.conversations / max) * 100);
                    const h2 = Math.round((d.orders / max) * 100);
                    return (
                        <div
                            key={d.day}
                            className="flex-1 h-full flex flex-col justify-end items-center gap-2.5"
                            title={`${d.day} — ${fa(d.conversations)} گفتگو، ${fa(d.orders)} سفارش`}
                        >
                            <div className="flex-1 w-full flex items-end justify-center gap-1">
                                <div
                                    className="w-3 rounded-t-md rounded-b-sm transition-all duration-500"
                                    style={{
                                        height: `${h1}%`,
                                        minHeight: 6,
                                        background:
                                            'linear-gradient(180deg, var(--sp-primary) 0%, var(--sp-primary-dark) 100%)',
                                        boxShadow: '0 3px 10px -2px rgba(79,140,255,.4)',
                                        animation: `barGrow .7s ${i * 0.05}s cubic-bezier(.16,1,.3,1) backwards`,
                                    }}
                                />
                                <div
                                    className="w-3 rounded-t-md rounded-b-sm transition-all duration-500"
                                    style={{
                                        height: `${h2}%`,
                                        minHeight: 6,
                                        background:
                                            'linear-gradient(180deg, var(--sp-accent) 0%, rgba(102,217,255,.6) 100%)',
                                        animation: `barGrow .7s ${i * 0.05 + 0.05}s cubic-bezier(.16,1,.3,1) backwards`,
                                    }}
                                />
                            </div>
                            <span className="text-[10.5px] text-[var(--sp-text-3)] font-medium whitespace-nowrap">
                {d.day}
              </span>
                        </div>
                    );
                })}
            </div>

            <style>{`
        @keyframes barGrow {
          from { height: 0 !important; opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
        </div>
    );
}