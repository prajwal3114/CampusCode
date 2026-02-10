import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Tabs from '../components/ui/Tabs';
import { courses, leaderboardData } from '../data/coursesData';

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
                <span className="text-sm font-semibold">UP</span>
              </div>
            )}
            {user.change === 'down' && (
              <div className="flex items-center gap-1 text-red-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-sm font-semibold">DOWN</span>
              </div>
            )}
            {user.change === 'same' && (
              <div className="text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                </svg>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Leaderboard() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return <div>Course not found</div>;
  }
  
  const tabs = [
    {
      label: 'Overall Leaderboard',
      content: <LeaderboardTable data={leaderboardData.current} />
    },
    {
      label: 'Competition Leaderboard',
      content: <LeaderboardTable data={leaderboardData.competition} />
    }
  ];
  
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link to={`/open-courses/${courseId}`} className="text-neon-cyan hover:text-neon-purple transition-colors mb-4 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Course
            </Link>
            <h1 className="text-4xl font-bold neon-text mb-2">Leaderboard</h1>
            <p className="text-gray-400">{course.name}</p>
          </div>
          
          <div className="glass-card p-6 border-neon-cyan/30">
            <Tabs tabs={tabs} />
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Card className="text-center" neonBorder>
              <div className="text-3xl font-bold neon-text mb-1">1,247</div>
              <div className="text-sm text-gray-400">Total Learners</div>
            </Card>
            <Card className="text-center" neonBorder>
              <div className="text-3xl font-bold neon-text mb-1">89</div>
              <div className="text-sm text-gray-400">Active Competitors</div>
            </Card>
            <Card className="text-center" neonBorder>
              <div className="text-3xl font-bold neon-text mb-1">23</div>
              <div className="text-sm text-gray-400">Live Challenges</div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
