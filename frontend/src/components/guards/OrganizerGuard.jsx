import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function OrganizerGuard({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/organizer/login" replace />;
  }

  if (user.role !== 'ORGANIZER') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
