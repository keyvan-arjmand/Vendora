import { useEffect, useState } from 'react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

const EMPTY = {
    name: '',
    sku: '',
    category: 'کفش',
    price: '',
    stock: '',
    sizes: '',
    colors: '',
    description: '',
};

function Field({ label, hint, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[12.5px] font-semibold text-[var(--sp-text-2)]">
                {label}
            </label>
            {children}
            {hint && <span className="text-[11.5px] text-[var(--sp-text-3)]">{hint}</span>}
        </div>
    );
}

const inputCls =
    'h-11 px-3.5 rounded-md w-full outline-none text-[13px] transition-all';

const inputStyle = {
    background: 'var(--sp-surface)',
    border: '1px solid var(--sp-border)',
    color: 'var(--sp-text)',
};

export default function ProductModal({ open, onClose, product, onSave }) {
    const [form, setForm] = useState(EMPTY);
    const isEdit = !!product;

    useEffect(() => {
        if (open) setForm(product ? { ...EMPTY, ...product } : EMPTY);
    }, [open, product]);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onFocus = (e) => {
        e.target.style.borderColor = 'var(--sp-primary)';
        e.target.style.boxShadow = '0 0 0 3px rgba(79,140,255,.15)';
    };
    const onBlur = (e) => {
        e.target.style.borderColor = 'var(--sp-border)';
        e.target.style.boxShadow = 'none';
    };

    const submit = () => {
        if (!form.name.trim()) return;
        const price = parseInt(String(form.price).replace(/[^\d]/g, ''), 10) || 0;
        const stock = parseInt(String(form.stock).replace(/[^\d]/g, ''), 10) || 0;
        onSave({
            ...form,
            name: form.name.trim(),
            price,
            stock,
        });
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={isEdit ? 'ویرایش محصول' : 'افزودن محصول جدید'}
            size="md"
            footer={
                <>
                    <button
                        onClick={onClose}
                        className="h-10 px-4 rounded-md text-[13px] font-semibold text-[var(--sp-text-2)] transition-all hover:text-[var(--sp-text)]"
                        style={{
                            background: 'var(--sp-surface)',
                            border: '1px solid var(--sp-border)',
                        }}
                    >
                        انصراف
                    </button>
                    <Button onClick={submit}>{isEdit ? 'ذخیره تغییرات' : 'افزودن محصول'}</Button>
                </>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                    <Field label="نام محصول">
                        <input
                            className={inputCls}
                            style={inputStyle}
                            value={form.name}
                            onChange={set('name')}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            placeholder="مثلاً Nike Air Max"
                        />
                    </Field>
                </div>

                <Field label="SKU">
                    <input
                        className={inputCls}
                        style={inputStyle}
                        value={form.sku}
                        onChange={set('sku')}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="NK-AM-001"
                    />
                </Field>

                <Field label="دسته‌بندی">
                    <input
                        className={inputCls}
                        style={inputStyle}
                        value={form.category}
                        onChange={set('category')}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </Field>

                <Field label="قیمت (تومان)">
                    <input
                        className={inputCls}
                        style={inputStyle}
                        value={form.price}
                        onChange={set('price')}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="۲٬۸۹۰٬۰۰۰"
                    />
                </Field>

                <Field label="موجودی">
                    <input
                        className={inputCls}
                        style={inputStyle}
                        value={form.stock}
                        onChange={set('stock')}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="۷"
                    />
                </Field>

                <Field label="سایزها" hint="با فاصله جدا کنید">
                    <input
                        className={inputCls}
                        style={inputStyle}
                        value={form.sizes}
                        onChange={set('sizes')}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="40 41 42 43"
                    />
                </Field>

                <Field label="رنگ‌ها" hint="با ویرگول جدا کنید">
                    <input
                        className={inputCls}
                        style={inputStyle}
                        value={form.colors}
                        onChange={set('colors')}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="مشکی، سفید"
                    />
                </Field>

                <div className="md:col-span-2">
                    <Field label="توضیحات">
            <textarea
                rows={3}
                className="px-3.5 py-3 rounded-md w-full outline-none text-[13px] transition-all resize-vertical"
                style={inputStyle}
                value={form.description}
                onChange={set('description')}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="توضیح کوتاه..."
            />
                    </Field>
                </div>
            </div>
        </Modal>
    );
}