import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export default function OrganizerRegister() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ id: 1, name: formData.name, email: formData.email, role: 'ORGANIZER' });
    navigate('/organizer/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 border-yellow-500/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 mb-4 shadow-lg shadow-yellow-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Request Organizer Access
            </span>
          </h1>
          <p className="text-gray-400">Create clubs and manage communities</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
              placeholder="admin@university.edu"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Organization / University
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
              placeholder="Stanford University"
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

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 border-0">
            Request Organizer Access
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have access?{' '}
            <Link to="/organizer/login" className="text-yellow-500 hover:text-orange-500 transition-colors font-semibold">
              Organizer Login
            </Link>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Regular user?{' '}
            <Link to="/register" className="text-neon-cyan hover:text-neon-purple transition-colors font-semibold">
              User Registration
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
