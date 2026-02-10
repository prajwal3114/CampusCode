import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { clubs, clubMembers } from '../data/clubsData';

export default function ClubMembers() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const members = clubMembers[clubId] || [];

  if (!club || club.status !== 'member') {
    return null;
  }

  const organizers = members.filter(m => m.role === 'organizer');
  const moderators = members.filter(m => m.role === 'moderator');
  const regularMembers = members.filter(m => m.role === 'member');

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link to={`/clubs/${clubId}/dashboard`} className="text-neon-cyan hover:text-neon-purple transition-colors mb-4 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Club
            </Link>
            <h1 className="text-4xl font-bold neon-text mb-2">Club Members</h1>
            <p className="text-gray-400">{club.name}</p>
          </div>

          {organizers.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-neon-cyan mb-4">Organizers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organizers.map((member, index) => (
                  <Card key={index} neonBorder className="text-center">
                    <div className="relative inline-block mb-3">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-2xl shadow-glow-lg">
                        {member.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-dark-bg ${
                        member.status === 'online' ? 'bg-green-500' :
                        member.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <h3 className="font-bold text-white mb-1">{member.name}</h3>
                    <Badge status="completed">ORGANIZER</Badge>
                    <p className="text-xs text-gray-500 mt-2">Joined {member.joinedDate}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {moderators.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-neon-purple mb-4">Moderators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {moderators.map((member, index) => (
                  <Card key={index} className="text-center border-neon-purple/30">
                    <div className="relative inline-block mb-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center font-bold text-xl shadow-neon-purple">
                        {member.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-dark-bg ${
                        member.status === 'online' ? 'bg-green-500' :
                        member.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <h3 className="font-bold text-white mb-1">{member.name}</h3>
                    <Badge status="unlocked">MODERATOR</Badge>
                    <p className="text-xs text-gray-500 mt-2">Joined {member.joinedDate}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regularMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <div className="relative inline-block mb-3">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center font-bold text-xl shadow-glow-sm">
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-dark-bg ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                  </div>
                  <h3 className="font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-400 capitalize">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-2">Joined {member.joinedDate}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
