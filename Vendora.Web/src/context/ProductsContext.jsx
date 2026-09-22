import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { products as initial } from '@/mocks/products';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState(initial);

    const create = useCallback((data) => {
        const newP = {
            id: 'p' + Date.now(),
            ...data,
            status: (data.stock > 0) ? 'instock' : 'out',
        };
        setProducts((prev) => [newP, ...prev]);
        return newP;
    }, []);

    const update = useCallback((id, data) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? {
                        ...p,
                        ...data,
                        status: (data.stock ?? p.stock) > 0 ? 'instock' : 'out',
                    }
                    : p
            )
        );
    }, []);

    const remove = useCallback((id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    }, []);

    const find = useCallback((id) => products.find((p) => p.id === id), [products]);

    const stats = useMemo(() => ({
        total: products.length,
        instock: products.filter((p) => p.status === 'instock').length,
        out: products.filter((p) => p.status === 'out').length,
    }), [products]);

    return (
        <ProductsContext.Provider
            value={{ products, create, update, remove, find, stats }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const ctx = useContext(ProductsContext);
    if (!ctx) throw new Error('useProducts must be used within ProductsProvider');
    return ctx;
}