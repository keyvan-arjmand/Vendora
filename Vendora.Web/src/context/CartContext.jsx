import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState({}); // { productId: qty }

    const add = (productId, qty = 1) =>
        setCart((c) => ({ ...c, [productId]: (c[productId] || 0) + qty }));

    const remove = (productId) =>
        setCart((c) => {
            const n = { ...c };
            delete n[productId];
            return n;
        });

    const clear = () => setCart({});

    const has = (productId) => !!cart[productId];

    const count = useMemo(
        () => Object.values(cart).reduce((s, v) => s + v, 0),
        [cart]
    );

    const ids = useMemo(() => Object.keys(cart), [cart]);

    return (
        <CartContext.Provider
            value={{ cart, ids, count, add, remove, clear, has, setCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}