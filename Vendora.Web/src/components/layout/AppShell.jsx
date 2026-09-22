// ============================================
// SPICA — App Shell
// ============================================
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppShell() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen relative">
            {/* Desktop sidebar */}
            <div className="hidden lg:block">
                <Sidebar conversationCount={3} />
            </div>

            {/* Mobile sidebar */}
            {sidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 lg:hidden"
                        style={{ background: 'rgba(11,18,32,.4)', backdropFilter: 'blur(3px)' }}
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="fixed top-0 end-0 bottom-0 z-50 lg:hidden">
                        <Sidebar conversationCount={3} />
                    </div>
                </>
            )}

            {/* Main */}
            <main className="flex-1 min-w-0 flex flex-col">
                <Topbar onToggleSidebar={() => setSidebarOpen(true)} />
                <div className="flex-1 min-h-0 px-5 pb-7">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}