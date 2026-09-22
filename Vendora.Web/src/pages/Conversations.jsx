import { useRef, useEffect } from 'react';
import { PanelRight } from 'lucide-react';
import useConversations from '@/hooks/useConversations';
import ConversationList from '@/features/conversations/ConversationList';
import ThreadHeader from '@/features/conversations/ThreadHeader';
import MessageBubble from '@/features/conversations/MessageBubble';
import Composer from '@/features/conversations/Composer';
import ContextPanel from '@/features/conversations/ContextPanel';
import EmptyState from '@/components/ui/EmptyState';
import { useToast } from '@/context/ToastContext';

export default function Conversations() {
    const {
        filtered,
        active,
        activeId,
        filter,
        channelFilter,
        search,
        setFilter,
        setChannelFilter,
        setSearch,
        open,
        sendMessage,
        takeover,
        giveBack,
    } = useConversations();

    const toast = useToast();
    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [activeId, active?.messages.length]);

    const handleTakeover = () => {
        if (!active) return;
        takeover(active.id);
        toast.success('کنترل گفتگو به شما منتقل شد.');
    };

    const handleGiveBack = () => {
        if (!active) return;
        giveBack(active.id);
        toast.success('کنترل گفتگو به Spica بازگشت.');
    };

    const handleAddProducts = () => {
        toast.success('محصولات به سبد سفارش اضافه شدند.');
    };

    return (
        <div className="py-6 animate-fadeUp">
            <div
                className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)_320px] rounded-2xl overflow-hidden h-[calc(100vh-140px)] min-h-[600px]"
                style={{
                    background: 'var(--sp-surface)',
                    border: '1px solid var(--sp-border)',
                    boxShadow: 'var(--sp-shadow-card)',
                }}
            >
                {/* List */}
                <div
                    className="min-w-0 h-full"
                    style={{ borderInlineEnd: '1px solid var(--sp-border)' }}
                >
                    <ConversationList
                        items={filtered}
                        activeId={activeId}
                        onOpen={open}
                        filter={filter}
                        onFilter={setFilter}
                        channelFilter={channelFilter}
                        onChannelFilter={setChannelFilter}
                        search={search}
                        onSearch={setSearch}
                    />
                </div>

                {/* Thread */}
                <div className="flex flex-col h-full min-w-0" style={{ background: 'var(--sp-surface-2)' }}>
                    {active ? (
                        <>
                            <ThreadHeader
                                conv={active}
                                onCustomerClick={() => toast.success('پروفایل مشتری باز می‌شود (Step بعدی)')}
                            />

                            <div
                                ref={bodyRef}
                                className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4"
                                style={{
                                    background:
                                        'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,140,255,.03), transparent 70%), var(--sp-surface-2)',
                                }}
                            >
                                {active.messages.map((m, i) => (
                                    <MessageBubble key={i} msg={m} />
                                ))}
                            </div>

                            <Composer conv={active} onSend={(t) => sendMessage(t, 'human')} />
                        </>
                    ) : (
                        <div className="flex-1 grid place-items-center">
                            <EmptyState
                                icon="MessageSquareText"
                                title="گفتگویی انتخاب نشده"
                                description="از لیست کنار یک گفتگو انتخاب کنید."
                            />
                        </div>
                    )}
                </div>

                {/* Context */}
                <div className="hidden xl:block min-w-0 h-full">
                    {active ? (
                        <ContextPanel
                            conv={active}
                            onTakeover={handleTakeover}
                            onGiveBack={handleGiveBack}
                            onAddProducts={handleAddProducts}
                        />
                    ) : (
                        <aside
                            className="flex flex-col h-full"
                            style={{
                                background: 'var(--sp-surface)',
                                borderInlineStart: '1px solid var(--sp-border)',
                            }}
                        >
                            <div className="flex-1 grid place-items-center p-6">
                                <EmptyState
                                    icon="Sparkles"
                                    title="منتظر انتخاب گفتگو"
                                    description="پس از انتخاب یک گفتگو، تحلیل Spica اینجا نمایش داده می‌شود."
                                />
                            </div>
                        </aside>
                    )}
                </div>
            </div>

            {/* Mobile context toggle — غیرفعال در MVP، برای بعد */}
            <button
                className="hidden lg:flex xl:hidden fixed bottom-6 end-6 z-50 w-12 h-12 rounded-full grid place-items-center text-white"
                style={{
                    background: 'var(--sp-gradient)',
                    boxShadow: '0 10px 24px -6px rgba(79,140,255,.5)',
                }}
                title="نمایش Context"
            >
                <PanelRight size={20} />
            </button>
        </div>
    );
}