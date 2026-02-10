import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Tabs from '../components/ui/Tabs';
import { clubs, clubMembers, joinRequests } from '../data/clubsData';

export default function ManageClub() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const members = clubMembers.filter(m => m.clubId === clubId);
  const requests = joinRequests.filter(r => r.clubId === clubId);

  if (!club) return null;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'members', label: 'Members' },
    { id: 'requests', label: `Requests (${requests.length})` },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link to="/organizer/clubs" className="text-yellow-500 hover:text-orange-500 transition-colors mb-4 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Clubs
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center font-bold shadow-lg shadow-yellow-500/50 text-2xl">
                  {club.name.split(' ')[0][0]}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{club.name}</h1>
                  <p className="text-gray-400">{club.university}</p>
                </div>
              </div>
              <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50">
                ADMIN CONTROL
              </Badge>
            </div>
          </div>

          <Tabs tabs={tabs}>
            <div data-tab="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card neonBorder>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-neon-cyan mb-2">{club.members}</p>
                    <p className="text-sm text-gray-400">Total Members</p>
                  </div>
                </Card>
                <Card neonBorder>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-yellow-500 mb-2">{requests.length}</p>
                    <p className="text-sm text-gray-400">Pending Requests</p>
                  </div>
                </Card>
                <Card neonBorder>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-neon-purple mb-2">8</p>
                    <p className="text-sm text-gray-400">Active Resources</p>
                  </div>
                </Card>
              </div>

              <Card neonBorder>
                <h3 className="text-xl font-bold text-white mb-4">Club Description</h3>
                <p className="text-gray-400 mb-4">{club.description}</p>
                <button className="px-4 py-2 rounded-lg bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
                  Edit Description
                </button>
              </Card>
            </div>

            <div data-tab="members">
              <Card neonBorder>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Club Members ({members.length})</h3>
                  <button className="px-4 py-2 rounded-lg bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 transition-all text-sm">
                    Add Member
                  </button>
                </div>
                <div className="space-y-3">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-dark-hover hover:bg-dark-card transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold shadow-glow-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{member.name}</p>
                          <p className="text-xs text-gray-400">
                            <Badge className={`mr-2 text-xs ${
                              member.role === 'organizer' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50' :
                              member.role === 'moderator' ? 'bg-neon-purple/20 text-neon-purple border-neon-purple/50' :
                              'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50'
                            }`}>
                              {member.role.toUpperCase()}
                            </Badge>
                            {member.joinedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 rounded bg-dark-card border border-neon-cyan/30 text-neon-cyan hover:shadow-glow-sm transition-all text-sm">
                          Edit
                        </button>
                        <button className="px-3 py-1 rounded bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all text-sm">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div data-tab="requests">
              <Card neonBorder>
                <h3 className="text-xl font-bold text-white mb-6">Join Requests ({requests.length})</h3>
                {requests.length > 0 ? (
                  <div className="space-y-3">
                    {requests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 rounded-lg bg-dark-hover hover:bg-dark-card transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold shadow-glow-sm">
                            {request.userName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{request.userName}</p>
                            <p className="text-sm text-gray-400">{request.email}</p>
                            <p className="text-xs text-gray-500 mt-1">Requested {request.requestDate}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30 transition-all font-semibold">
                            Approve
                          </button>
                          <button className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all font-semibold">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📭</div>
                    <p className="text-gray-400">No pending join requests</p>
                  </div>
                )}
              </Card>
            </div>

            <div data-tab="settings">
              <Card neonBorder>
                <h3 className="text-xl font-bold text-white mb-6">Club Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Club Name</label>
                    <input
                      type="text"
                      defaultValue={club.name}
                      className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">University</label>
                    <input
                      type="text"
                      defaultValue={club.university}
                      className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-all"
                    />
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all">
                      Save Changes
                    </button>
                  </div>
                  <div className="pt-4 border-t border-red-500/30">
                    <h4 className="text-lg font-bold text-red-400 mb-2">Danger Zone</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Once you delete a club, there is no going back. Please be certain.
                    </p>
                    <button className="px-6 py-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all font-semibold">
                      Delete Club
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
