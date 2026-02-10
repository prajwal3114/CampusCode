import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) return null;

  const userMenuSections = [
    {
      title: 'Main',
      items: [
        {
          name: 'Dashboard',
          path: '/dashboard',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Open Courses',
      items: [
        {
          name: 'Browse Courses',
          path: '/open-courses',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          )
        },
        {
          name: 'Resources',
          path: '/resources',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Coding Clubs',
      items: [
        {
          name: 'My Clubs',
          path: '/clubs',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          badge: '3'
        }
      ]
    },
    {
      title: 'Account',
      items: [
        {
          name: 'Profile',
          path: '/profile',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        }
      ]
    }
  ];

  const organizerMenuSections = [
    {
      title: 'Organizer',
      items: [
        {
          name: 'Dashboard',
          path: '/organizer/dashboard',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Club Management',
      items: [
        {
          name: 'Manage Clubs',
          path: '/organizer/clubs',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          badge: '5'
        },
        {
          name: 'Create Club',
          path: '/organizer/clubs/create',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )
        },
        {
          name: 'Join Requests',
          path: '/organizer/requests',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          ),
          badge: '12'
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          name: 'Resource Manager',
          path: '/organizer/resources',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Account',
      items: [
        {
          name: 'Profile',
          path: '/profile',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        }
      ]
    }
  ];

  const menuSections = user.role === 'ORGANIZER' ? organizerMenuSections : userMenuSections;
  
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 glass-card border-r border-neon-cyan/20 p-4 overflow-y-auto scrollbar-thin">
      <div className="flex flex-col gap-6 pb-40">
        {menuSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
              {section.title}
            </h3>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`sidebar-item ${isActive ? 'sidebar-item-active' : ''}`}
                  >
                    {item.icon}
                    <span className="flex-1">{item.name}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        user.role === 'ORGANIZER' 
                          ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50'
                          : 'bg-neon-purple/20 text-neon-purple border-neon-purple/50'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-6 left-4 right-4">
        <div className="glass-card p-4 border-neon-purple/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
            <span className="text-sm text-gray-400">Your Progress</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Overall</span>
              <span className="text-neon-cyan font-semibold">68%</span>
            </div>
            <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full shadow-neon-cyan" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
