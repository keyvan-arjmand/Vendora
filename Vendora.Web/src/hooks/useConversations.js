import { useMemo, useState, useCallback } from 'react';
import { conversations as mock } from '@/mocks/conversations';

export default function useConversations() {
    const [items, setItems] = useState(() =>
        mock.map((c) => ({ ...c, messages: [...c.messages] }))
    );

    const [activeId, setActiveId] = useState(items[0]?.id || null);
    const [filter, setFilter] = useState('all');
    const [channelFilter, setChannelFilter] = useState('all');
    const [search, setSearch] = useState('');

    const active = useMemo(
        () => items.find((c) => c.id === activeId) || null,
        [items, activeId]
    );

    const filtered = useMemo(() => {
        return items.filter((c) => {
            const q = search.trim();
            const matchQ =
                !q || c.customer.includes(q) || c.handle.includes(q);
            let matchF = true;
            if (filter === 'ai') matchF = c.aiStatus === 'ai';
            if (filter === 'review') matchF = c.aiStatus === 'review';
            if (filter === 'order') matchF = c.filterTags?.includes('order');
            const matchCh = channelFilter === 'all' || c.channel === channelFilter;
            return matchQ && matchF && matchCh;
        });
    }, [items, filter, channelFilter, search]);

    const open = useCallback((id) => {
        setActiveId(id);
        setItems((prev) =>
            prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
        );
    }, []);

    const sendMessage = useCallback(
        (text, from = 'human') => {
            if (!active || !text.trim()) return;
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, '0');
            const mm = String(now.getMinutes()).padStart(2, '0');
            const timeFa = `${hh}:${mm}`.replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

            setItems((prev) =>
                prev.map((c) =>
                    c.id === active.id
                        ? {
                            ...c,
                            messages: [
                                ...c.messages,
                                { from, text: text.trim(), time: timeFa },
                            ],
                            updatedAt: 'همین حالا',
                        }
                        : c
                )
            );
        },
        [active]
    );

    const takeover = useCallback((id) => {
        setItems((prev) =>
            prev.map((c) => (c.id === id ? { ...c, aiStatus: 'human' } : c))
        );
    }, []);

    const giveBack = useCallback((id) => {
        setItems((prev) =>
            prev.map((c) => (c.id === id ? { ...c, aiStatus: 'ai' } : c))
        );
    }, []);

    const unreadCount = useMemo(
        () => items.reduce((s, c) => s + (c.unread || 0), 0),
        [items]
    );

    return {
        items,
        filtered,
        active,
        activeId,
        filter,
        channelFilter,
        search,
        unreadCount,
        setFilter,
        setChannelFilter,
        setSearch,
        open,
        sendMessage,
        takeover,
        giveBack,
    };
}