import { Sparkles, Check } from 'lucide-react'

export default function App() {
  return (
      <div className="min-h-svh bg-bg text-fg p-10 dark" dir="rtl">
        <div className="max-w-xl mx-auto space-y-6">

          <div>
            <h1 className="text-[28px] font-bold tracking-tight ">Vendora</h1>
            <p className="text-fg-muted text-sm mt-1">
              سیستم طراحی تازه فعال شد — فونت، RTL، توکن‌ها، همه چیز.
            </p>
          </div>

          {/* Surfaces */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-sm space-y-4 ">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary text-primary-fg grid place-items-center">
                <Sparkles size={16} />
              </div>
              <div>
                <div className="font-semibold text-[15px]">کارت نمونه</div>
                <div className="text-xs text-fg-subtle">surface · border · shadow-sm</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="h-10 px-4 rounded-md bg-primary text-primary-fg
                               text-sm font-semibold
                               hover:bg-primary-hover active:bg-primary-active
                               transition-colors duration-150">
                دکمه اصلی
              </button>
              <button className="h-10 px-4 rounded-md bg-surface border border-border-strong
                               text-sm font-semibold text-fg
                               hover:bg-surface-2 transition-colors duration-150">
                دکمه ثانویه
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1
                             rounded-full text-[11px] font-semibold
                             bg-success-soft text-success border border-success-border">
              <Check size={11} /> موفق
            </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold
                             bg-warning-soft text-warning border border-warning-border">
              هشدار
            </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold
                             bg-danger-soft text-danger border border-danger-border">
              خطا
            </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold
                             bg-primary-soft text-primary border border-primary-border">
              AI
            </span>
            </div>

            {/* Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-fg-muted">نام مشتری</label>
              <input
                  className="w-full h-[42px] px-3 rounded-md bg-surface border border-border
                         text-sm placeholder:text-fg-faint
                         focus:border-primary focus:outline-none
                         focus:ring-2 focus:ring-primary/15
                         transition-[border-color,box-shadow] duration-150"
                  placeholder="مثلاً علی محمدی"
              />
            </div>
          </div>

          <p className="text-xs text-fg-subtle text-center">
            برای تست دارک‌مود، در DevTools روی <code className="font-mono px-1 rounded bg-surface-2">&lt;html&gt;</code> کلاس <code className="font-mono px-1 rounded bg-surface-2">dark</code> رو اضافه کن.
          </p>
        </div>
      </div>
  )
}