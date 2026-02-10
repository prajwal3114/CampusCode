import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useAuth } from '../context/AuthContext';
import { clubs, clubMembers, clubCompetitions } from '../data/clubsData';

export default function ClubDashboard() {
  const { clubId } = useParams();
  const { user } = useAuth();
  const club = clubs.find(c => c.id === clubId);
  const members = clubMembers[clubId] || [];
  const competitions = clubCompetitions[clubId] || [];

  if (!club) {
    return <div>Club not found</div>;
  }

  if (club.status !== 'member') {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className="ml-64 mt-16 p-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <Card neonBorder className="max-w-2xl text-center p-12">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-3xl font-bold neon-text mb-4">Private Club</h2>
            <p className="text-gray-400 mb-6">
              You need to be a member to access this club's content.
            </p>
            {club.status === 'pending' ? (
              <Badge status="upcoming">REQUEST PENDING</Badge>
            ) : (
              <button className="cyber-button">Request to Join</button>
            )}
          </Card>
        </div>
      </>
    );
  }

  const quickLinks = [
    {
      title: 'Resources',
      path: `/clubs/${clubId}/resources`,
      icon: '📚',
      description: 'Club materials & tutorials',
      color: 'cyan'
    },
    {
      title: 'Competitions',
      path: `/clubs/${clubId}/competitions`,
      icon: '🏆',
      description: 'Club-only challenges',
      color: 'purple'
    },
    {
      title: 'Leaderboard',
      path: `/clubs/${clubId}/leaderboard`,
      icon: '📊',
      description: 'Club rankings',
      color: 'cyan'
    },
    {
      title: 'Chat',
      path: `/clubs/${clubId}/chat`,
      icon: '💬',
      description: 'Club discussions',
      color: 'purple'
    },
    {
      title: 'Members',
      path: `/clubs/${clubId}/members`,
      icon: '👥',
      description: 'View all members',
      color: 'cyan'
    }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link to="/clubs" className="text-neon-cyan hover:text-neon-purple transition-colors mb-4 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Clubs
            </Link>
          </div>

          <Card neonBorder className="mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative flex items-start gap-6">
              <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${
                club.color === 'cyan' ? 'from-neon-cyan to-neon-blue' : 'from-neon-purple to-neon-pink'
              } flex items-center justify-center shadow-glow-lg`}>
                <span className="text-5xl">{club.icon}</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{club.name}</h1>
                  <Badge status="completed">MEMBER</Badge>
                </div>
                <p className="text-neon-cyan mb-2">{club.college}</p>
                <p className="text-gray-400 mb-4">{club.description}</p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{club.members} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Organizer: {club.organizer}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {user && user.role === 'ORGANIZER' && (
            <Link to={`/organizer/clubs/${clubId}/manage`} className="block mb-8">
              <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/30 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-yellow-500 flex items-center gap-2">
                        Manage This Club
                        <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50 text-xs">
                          ADMIN
                        </Badge>
                      </h3>
                      <p className="text-sm text-gray-400">View analytics, approve requests, edit settings</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Card className={`h-full bg-gradient-to-br ${
                  link.color === 'cyan' ? 'from-neon-cyan/10 to-neon-blue/10' : 'from-neon-purple/10 to-neon-pink/10'
                } border ${
                  link.color === 'cyan' ? 'border-neon-cyan/50' : 'border-neon-purple/50'
                } cursor-pointer group`}>
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Active Competitions</h2>
              <div className="space-y-4">
                {competitions.slice(0, 2).map((comp) => (
                  <Card key={comp.id} neonBorder>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{comp.title}</h3>
                          <Badge status={comp.status}>{comp.status.toUpperCase()}</Badge>
                        </div>
                        <p className="text-gray-400 mb-3">{comp.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{comp.startTime}</span>
                          <span>•</span>
                          <span>{comp.participants} participants</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neon-purple mb-4">Top Members</h2>
              <div className="space-y-3">
                {members.slice(0, 5).map((member, index) => (
                  <Card key={index} className="flex items-center gap-3" hover={false}>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      index % 2 === 0 ? 'from-neon-cyan to-neon-blue' : 'from-neon-purple to-neon-pink'
                    } flex items-center justify-center font-bold shadow-glow-sm`}>
                      {member.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{member.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
