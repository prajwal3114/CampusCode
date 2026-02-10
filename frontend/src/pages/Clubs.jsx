import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { clubs } from '../data/clubsData';

export default function Clubs() {
  const myClubs = clubs.filter(c => c.status === 'member');
  const pendingClubs = clubs.filter(c => c.status === 'pending');
  const availableClubs = clubs.filter(c => c.status === 'not-member');

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold neon-text mb-2">Coding College Clubs</h1>
            <p className="text-gray-400">Join exclusive clubs and collaborate with peers</p>
          </div>

          {myClubs.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                My Clubs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myClubs.map((club) => (
                  <Card key={club.id} neonBorder className="relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                      club.color === 'cyan' ? 'from-neon-cyan/10' : 'from-neon-purple/10'
                    } to-transparent rounded-full blur-3xl`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{club.icon}</div>
                        <Badge status="completed">MEMBER</Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">{club.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{club.college}</p>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{club.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{club.members} members</span>
                        </div>
                      </div>
                      
                      <Link to={`/clubs/${club.id}/dashboard`}>
                        <Button variant="primary" className="w-full">
                          Open Club
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {pendingClubs.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pending Requests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingClubs.map((club) => (
                  <Card key={club.id} className="border-yellow-500/30 relative overflow-hidden opacity-75">
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl grayscale">{club.icon}</div>
                        <Badge status="upcoming">PENDING</Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">{club.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{club.college}</p>
                      <p className="text-gray-400 text-sm mb-4">Waiting for organizer approval...</p>
                      
                      <Button variant="ghost" className="w-full opacity-50 cursor-not-allowed">
                        Request Pending
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-neon-purple mb-4">Explore Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableClubs.map((club) => (
                <Card key={club.id} neonBorder className="relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                    club.color === 'cyan' ? 'from-neon-cyan/10' : 'from-neon-purple/10'
                  } to-transparent rounded-full blur-3xl`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{club.icon}</div>
                      <Badge status="locked">PRIVATE</Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{club.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{club.college}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{club.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{club.members} members</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-neon-purple/20 text-neon-purple border border-neon-purple/50">
                        {club.category}
                      </span>
                    </div>
                    
                    <Button variant="secondary" className="w-full">
                      Request to Join
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
