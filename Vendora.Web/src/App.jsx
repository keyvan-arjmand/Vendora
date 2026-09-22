import { Routes, Route, Navigate } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { ProtectedRoute, PublicRoute } from '@/components/shared/ProtectedRoute';

import { ToastProvider } from '@/context/ToastContext';
import { AgentProvider } from '@/context/AgentContext';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';

import Login       from '@/pages/auth/Login';
import Signup      from '@/pages/auth/Signup';
import Onboarding  from '@/pages/Onboarding';
import Dashboard   from '@/pages/Dashboard';
import Conversations from '@/pages/Conversations';
import Products    from '@/pages/Products';
import Customers   from '@/pages/Customers';
import Orders      from '@/pages/Orders';
import Agent       from '@/pages/Agent';
import Channels    from '@/pages/Channels';
import AiAnalyze   from '@/pages/AiAnalyze';
import Usage       from '@/pages/Usage';
import Settings    from '@/pages/Settings';
import NotFound    from '@/pages/NotFound';

function AppRoutes() {
    const { booted } = useAuth();

    if (!booted) return <LoadingScreen />;

    return (
        <Routes>
            {/* Public */}
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>
                }
            />

            {/* Onboarding (needs auth but not onboarded) */}
            <Route
                path="/onboarding"
                element={
                    <ProtectedRoute>
                        <Onboarding />
                    </ProtectedRoute>
                }
            />

            {/* App */}
            <Route
                element={
                    <ProtectedRoute>
                        <AppShell />
                    </ProtectedRoute>
                }
            >
                <Route path="/"              element={<Dashboard />} />
                <Route path="/conversations" element={<Conversations />} />
                <Route path="/products"      element={<Products />} />
                <Route path="/customers"     element={<Customers />} />
                <Route path="/orders"        element={<Orders />} />
                <Route path="/agent"         element={<Agent />} />
                <Route path="/channels"      element={<Channels />} />
                <Route path="/ai"            element={<AiAnalyze />} />
                <Route path="/usage"         element={<Usage />} />
                <Route path="/settings"      element={<Settings />} />
                <Route path="*"              element={<NotFound />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <ToastProvider>
                <AgentProvider>
                    <CartProvider>
                        <AppRoutes />
                    </CartProvider>
                </AgentProvider>
            </ToastProvider>
        </AuthProvider>
    );
}