import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function UserGuard({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'USER') {
    return <Navigate to="/organizer/dashboard" replace />;
  }

  return children;
}
