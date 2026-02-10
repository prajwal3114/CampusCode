import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Tabs from '../components/ui/Tabs';
import { clubs, clubLeaderboard } from '../data/clubsData';

function LeaderboardTable({ data }) {
  return (
    <div className="space-y-2">
      {data.map((user) => (
        <Card 
          key={user.rank} 
          className={`flex items-center gap-4 ${
            user.rank <= 3 ? 'border-neon-cyan/50 shadow-glow-sm' : ''
          }`}
          hover={false}
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${
            user.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' :
            user.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black' :
            user.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-black' :
            'bg-dark-card text-neon-cyan border border-neon-cyan/30'
          }`}>
            {user.rank}
          </div>
          
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold shadow-glow-sm">
            {user.avatar}
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-white">{user.name}</h4>
            <p className="text-sm text-gray-400">Score: {user.score} points</p>
          </div>
          
          <div className="flex items-center gap-2">
            {user.change === 'up' && (
              <div className="flex items-center gap-1 text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            )}
            {user.change === 'down' && (
              <div className="flex items-center gap-1 text-red-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function ClubLeaderboard() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const leaderboard = clubLeaderboard[clubId] || [];

  if (!club || club.status !== 'member') {
    return null;
  }

  const tabs = [
    {
      label: 'Club Leaderboard',
      content: <LeaderboardTable data={leaderboard} />
    }
  ];

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
            <h1 className="text-4xl font-bold neon-text mb-2">Club Leaderboard</h1>
            <p className="text-gray-400">{club.name}</p>
          </div>

          <div className="glass-card p-6 border-neon-cyan/30">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </>
  );
}
