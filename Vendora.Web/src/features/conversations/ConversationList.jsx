import { Search, SearchX } from 'lucide-react';
import ConversationItem from './ConversationItem';
import ConversationFilters from './ConversationFilters';
import EmptyState from '@/components/ui/EmptyState';

export default function ConversationList({
                                             items,
                                             activeId,
                                             onOpen,
                                             filter,
                                             onFilter,
                                             channelFilter,
                                             onChannelFilter,
                                             search,
                                             onSearch,
                                         }) {
    return (
        <div className="flex flex-col h-full min-w-0">
            {/* Header */}
            <div
                className="flex-none p-4 flex flex-col gap-3"
                style={{
                    background: 'var(--sp-surface-2)',
                    borderBottom: '1px solid var(--sp-border)',
                }}
            >
                <div
                    className="flex items-center gap-2 h-10 px-3 rounded-md"
                    style={{
                        background: 'var(--sp-surface)',
                        border: '1px solid var(--sp-border)',
                    }}
                >
                    <Search size={16} className="text-[var(--sp-text-3)] flex-none" />
                    <input
                        value={search}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="جستجوی گفتگو..."
                        className="flex-1 min-w-0 bg-transparent outline-none text-[13px] placeholder:text-[var(--sp-text-3)]"
                    />
                </div>

                <ConversationFilters
                    filter={filter}
                    onFilter={onFilter}
                    channelFilter={channelFilter}
                    onChannelFilter={onChannelFilter}
                />
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-2">
                {items.length === 0 ? (
                    <EmptyState
                        icon="SearchX"
                        title="گفتگویی پیدا نشد"
                        description="فیلترها یا عبارت جستجو را تغییر دهید."
                    />
                ) : (
                    items.map((c) => (
                        <ConversationItem
                            key={c.id}
                            conv={c}
                            active={c.id === activeId}
                            onClick={() => onOpen(c.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}