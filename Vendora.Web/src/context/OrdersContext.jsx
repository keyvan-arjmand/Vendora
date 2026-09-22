import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { orders as initial, orderTotal } from '@/mocks/orders';

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
    const [orders, setOrders] = useState(initial);

    const create = useCallback((data) => {
        const now = new Date();
        const newId = 'ORD-' + (1025 + Math.floor(Math.random() * 900));
        const dateFa = now.toLocaleDateString('fa-IR');

        const newOrder = {
            id: newId,
            customer: data.customer,
            date: dateFa,
            payment: data.payment || 'pending',
            status: data.status || 'awaiting',
            channel: data.channel || 'telegram',
            items: data.items || [],
            shipping: data.shipping || 0,
            discount: data.discount || 0,
            timeline: ['Order Created'],
        };
        setOrders((prev) => [newOrder, ...prev]);
        return newOrder;
    }, []);

    const find = useCallback((id) => orders.find((o) => o.id === id), [orders]);

    const stats = useMemo(() => {
        const revenue = orders.reduce((s, o) => s + orderTotal(o), 0);
        const pending = orders.filter((o) => o.payment === 'pending').length;
        const paid = orders.filter((o) => o.payment === 'paid').length;
        const avg = orders.length ? Math.round(revenue / orders.length) : 0;
        return { total: orders.length, revenue, pending, paid, avg };
    }, [orders]);

    return (
        <OrdersContext.Provider value={{ orders, create, find, stats }}>
            {children}
        </OrdersContext.Provider>
    );
}

export function useOrders() {
    const ctx = useContext(OrdersContext);
    if (!ctx) throw new Error('useOrders must be used within OrdersProvider');
    return ctx;
}