import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function ProtectedRoute({ children }) {
    const { isAuthenticated, onboarded } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!onboarded && location.pathname !== '/onboarding') {
        return <Navigate to="/onboarding" replace />;
    }

    return children;
}

export function PublicRoute({ children }) {
    const { isAuthenticated, onboarded } = useAuth();

    if (isAuthenticated) {
        return <Navigate to={onboarded ? '/' : '/onboarding'} replace />;
    }

    return children;
}