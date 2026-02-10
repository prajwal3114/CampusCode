import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-neon-cyan/20">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to={user.role === 'ORGANIZER' ? '/organizer/dashboard' : '/dashboard'} className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
            user.role === 'ORGANIZER' ? 'from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/50' : 'from-neon-cyan to-neon-purple shadow-neon-cyan'
          } flex items-center justify-center`}>
            <span className="text-2xl font-bold">CC</span>
          </div>
          <span className="text-2xl font-bold neon-text">CampusClash</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder={user.role === 'ORGANIZER' ? 'Search clubs...' : 'Search courses & clubs...'}
              className="px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all w-64"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-card border ${
              user.role === 'ORGANIZER' ? 'border-yellow-500/30' : 'border-neon-purple/30'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                user.role === 'ORGANIZER' ? 'bg-yellow-500' : 'bg-neon-purple'
              } animate-pulse`}></div>
              <span className="text-xs text-gray-400">Role:</span>
              <span className={`text-sm font-semibold uppercase ${
                user.role === 'ORGANIZER' ? 'text-yellow-500' : 'text-neon-purple'
              }`}>
                {user.role}
              </span>
            </div>

            <button className="w-10 h-10 rounded-lg bg-dark-card border border-neon-cyan/30 flex items-center justify-center hover:shadow-glow-sm transition-all">
              <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            <Link to={user.role === 'ORGANIZER' ? '/organizer/profile' : '/profile'}>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                user.role === 'ORGANIZER' ? 'from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/50' : 'from-neon-purple to-neon-pink shadow-neon-purple'
              } flex items-center justify-center cursor-pointer hover:scale-105 transition-all`}>
                <span className="font-bold">{user.avatar || user.name?.split(' ').map(n => n[0]).join('') || 'U'}</span>
              </div>
            </Link>

            <button 
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-dark-card border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:shadow-glow-sm transition-all text-sm font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
