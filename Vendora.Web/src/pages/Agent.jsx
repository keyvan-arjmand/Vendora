import PageHeader from '@/components/shared/PageHeader';
import Tabs from '@/components/ui/Tabs';
import Switch from '@/components/ui/Switch';
import AgentSettings from '@/features/agent/AgentSettings';
import SalesRules from '@/features/agent/SalesRules';
import KnowledgeBase from '@/features/agent/KnowledgeBase';
import { useAgent } from '@/context/AgentContext';
import { useToast } from '@/context/ToastContext';
import { useState } from 'react';

const TABS = [
    { key: 'agent', label: 'فروشنده' },
    { key: 'rules', label: 'قوانین فروش' },
    { key: 'knowledge', label: 'دانش کسب‌وکار' },
];

export default function Agent() {
    const { active, setActive } = useAgent();
    const toast = useToast();
    const [tab, setTab] = useState('agent');

    const handleToggle = (v) => {
        setActive(v);
        toast[v ? 'success' : 'error'](
            v ? 'فروشنده AI فعال شد.' : 'فروشنده AI غیرفعال شد.'
        );
    };

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="فروشنده AI"
                subtitle={
                    <span className="flex items-center gap-2">
            <span
                className="inline-block w-2 h-2 rounded-full"
                style={{
                    background: active ? 'var(--sp-success)' : 'var(--sp-danger)',
                    boxShadow: `0 0 0 3px ${
                        active ? 'rgba(16,185,129,.15)' : 'rgba(239,68,68,.15)'
                    }`,
                }}
            />
                        {active
                            ? 'Spica در حال پاسخگویی به مشتریان شما است.'
                            : 'Spica غیرفعال است و پیام‌ها به تیم شما ارجاع داده می‌شوند.'}
          </span>
                }
                action={<Switch checked={active} onChange={handleToggle} label="AI فعال" />}
            />

            <div className="mb-6">
                <Tabs tabs={TABS} value={tab} onChange={setTab} />
            </div>

            {tab === 'agent' && <AgentSettings />}
            {tab === 'rules' && <SalesRules />}
            {tab === 'knowledge' && <KnowledgeBase />}
        </div>
    );
}