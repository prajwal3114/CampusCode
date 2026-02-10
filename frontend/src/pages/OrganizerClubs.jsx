import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { clubs } from '../data/clubsData';

export default function OrganizerClubs() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Manage Clubs
                </span>
              </h1>
              <p className="text-gray-400 mt-2">Oversee and control all your coding clubs</p>
            </div>
            <Link to="/organizer/clubs/create">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create New Club
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.slice(0, 5).map((club) => (
              <Card key={club.id} neonBorder className="relative">
                <div className="absolute top-3 right-3">
                  <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50 text-xs">
                    ADMIN
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center font-bold shadow-lg shadow-yellow-500/50">
                      {club.name.split(' ')[0][0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{club.name}</h3>
                      <p className="text-xs text-gray-500">{club.university}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{club.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                  <div className="p-2 rounded bg-dark-hover border border-neon-cyan/20">
                    <p className="text-xl font-bold text-neon-cyan">{club.members}</p>
                    <p className="text-xs text-gray-500">Members</p>
                  </div>
                  <div className="p-2 rounded bg-dark-hover border border-yellow-500/20">
                    <p className="text-xl font-bold text-yellow-500">3</p>
                    <p className="text-xs text-gray-500">Pending</p>
                  </div>
                  <div className="p-2 rounded bg-dark-hover border border-neon-purple/20">
                    <p className="text-xl font-bold text-neon-purple">2</p>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link to={`/organizer/clubs/${club.id}/manage`}>
                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 transition-all text-sm font-semibold">
                      Manage
                    </button>
                  </Link>
                  <Link to={`/clubs/${club.id}/dashboard`}>
                    <button className="w-full px-4 py-2 rounded-lg bg-dark-card border border-neon-cyan/30 text-neon-cyan hover:shadow-glow-sm transition-all text-sm">
                      View
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
