import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import Tabs from '@/components/ui/Tabs';
import StoreSettings from '@/features/settings/StoreSettings';
import TeamSettings from '@/features/settings/TeamSettings';
import NotificationSettings from '@/features/settings/NotificationSettings';
import AccountSettings from '@/features/settings/AccountSettings';

const TABS = [
    { key: 'store', label: 'اطلاعات فروشگاه' },
    { key: 'team', label: 'اعضای تیم' },
    { key: 'notifications', label: 'اعلان‌ها' },
    { key: 'account', label: 'حساب کاربری' },
];

export default function Settings() {
    const [tab, setTab] = useState('store');

    return (
        <div className="animate-fadeUp">
            <PageHeader
                title="تنظیمات"
                subtitle="مدیریت فروشگاه، تیم و حساب کاربری"
            />

            <div className="mb-6">
                <Tabs tabs={TABS} value={tab} onChange={setTab} />
            </div>

            {tab === 'store' && <StoreSettings />}
            {tab === 'team' && <TeamSettings />}
            {tab === 'notifications' && <NotificationSettings />}
            {tab === 'account' && <AccountSettings />}
        </div>
    );
}