import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ 
      id: 1, 
      name: formData.name, 
      email: formData.email, 
      role: 'USER',
      avatar: formData.name.split(' ').map(n => n[0]).join('').toUpperCase()
    });
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center shadow-glow-lg">
              <span className="text-3xl font-bold">CC</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold neon-text mb-2">Join CampusClash</h1>
          <p className="text-gray-400">Create your account and start learning</p>
        </div>

        <Card neonBorder className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">College/University</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Stanford University"
                className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                required
              />
            </div>

            <Button variant="primary" className="w-full">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-neon-cyan hover:text-neon-purple transition-colors">
                Sign in
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              Are you an organizer?{' '}
              <Link to="/organizer/register" className="text-yellow-500 hover:text-orange-500 transition-colors font-semibold">
                Register as Organizer
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
