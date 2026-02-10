import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export default function OrganizerDashboard() {
  const stats = [
    { 
      label: 'Total Clubs', 
      value: '5', 
      icon: '🏢',
      color: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/50'
    },
    { 
      label: 'Pending Requests', 
      value: '12', 
      icon: '⏳',
      color: 'from-neon-cyan/20 to-neon-blue/20',
      border: 'border-neon-cyan/50'
    },
    { 
      label: 'Total Members', 
      value: '248', 
      icon: '👥',
      color: 'from-neon-purple/20 to-neon-pink/20',
      border: 'border-neon-purple/50'
    },
    { 
      label: 'Active Competitions', 
      value: '8', 
      icon: '🏆',
      color: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/50'
    }
  ];

  const pendingRequests = [
    { id: 1, user: 'Sarah Johnson', club: 'Stanford CS Club', time: '2 hours ago', avatar: 'SJ' },
    { id: 2, user: 'Michael Chen', club: 'MIT WebDev Club', time: '5 hours ago', avatar: 'MC' },
    { id: 3, user: 'Emma Wilson', club: 'Berkeley ML Club', time: '1 day ago', avatar: 'EW' },
    { id: 4, user: 'David Kim', club: 'Stanford CS Club', time: '1 day ago', avatar: 'DK' },
    { id: 5, user: 'Lisa Anderson', club: 'Harvard Cyber Club', time: '2 days ago', avatar: 'LA' }
  ];

  const recentActivity = [
    { action: 'Created new club', target: 'Stanford CS Club', time: '3 hours ago', type: 'create' },
    { action: 'Approved member', target: 'John Doe joined MIT WebDev', time: '5 hours ago', type: 'approve' },
    { action: 'Posted resource', target: 'Advanced React Patterns', time: '1 day ago', type: 'resource' },
    { action: 'Started competition', target: 'Hash Tables Challenge', time: '2 days ago', type: 'competition' }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    Organizer Dashboard
                  </span>
                </h1>
                <p className="text-gray-400">Manage your clubs and community</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`bg-gradient-to-br ${stat.color} border ${stat.border}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{stat.icon}</span>
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-300 font-semibold">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/organizer/clubs/create" className="lg:col-span-3">
              <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/30 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-500">Create New Club</h3>
                      <p className="text-sm text-gray-400">Start a new coding community</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card neonBorder>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Pending Join Requests</h2>
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50">
                  {pendingRequests.length} New
                </Badge>
              </div>
              <div className="space-y-3">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 rounded-lg bg-dark-hover hover:bg-dark-card transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold shadow-glow-sm">
                        {request.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{request.user}</p>
                        <p className="text-xs text-gray-400">{request.club} • {request.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 rounded bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30 transition-all text-sm">
                        ✓
                      </button>
                      <button className="px-3 py-1 rounded bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all text-sm">
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card neonBorder>
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-dark-hover">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'create' ? 'bg-yellow-500' :
                      activity.type === 'approve' ? 'bg-green-500' :
                      activity.type === 'resource' ? 'bg-neon-cyan' :
                      'bg-neon-purple'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-white">
                        <span className="font-semibold">{activity.action}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.target}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
