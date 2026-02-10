import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export default function OrganizerLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ id: 1, name: 'Admin User', email: formData.email, role: 'ORGANIZER' });
    navigate('/organizer/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 border-yellow-500/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 mb-4 shadow-lg shadow-yellow-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Organizer Access
            </span>
          </h1>
          <p className="text-gray-400">Admin & Club Management Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 border-0">
            Access Organizer Portal
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Not an organizer?{' '}
            <Link to="/login" className="text-neon-cyan hover:text-neon-purple transition-colors font-semibold">
              User Login
            </Link>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Don't have admin access?{' '}
            <Link to="/organizer/register" className="text-yellow-500 hover:text-orange-500 transition-colors font-semibold">
              Request Access
            </Link>
          </p>
        </div>

        <div className="mt-6 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
          <p className="text-xs text-yellow-400 text-center">
            ⚠️ This portal is restricted to authorized organizers only
          </p>
        </div>
      </Card>
    </div>
  );
}
