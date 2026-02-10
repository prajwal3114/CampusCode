import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ 
      id: 1, 
      name: 'John Doe', 
      email: email, 
      role: 'USER',
      avatar: 'JD'
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-glow-lg">
              <span className="text-3xl font-bold">CC</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold neon-text mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue your learning journey</p>
        </div>

        <Card neonBorder className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                required
              />
            </div>

            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-neon-cyan hover:text-neon-purple transition-colors">
                Sign up
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              Are you an organizer?{' '}
              <Link to="/organizer/login" className="text-yellow-500 hover:text-orange-500 transition-colors font-semibold">
                Organizer Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
