import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { courses, roadmapSteps, leaderboardData } from '../data/coursesData';

export default function CourseRoadmap() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const steps = roadmapSteps[courseId] || [];
  const currentLeaderboard = leaderboardData.current.slice(0, 5);
  
  if (!course) {
    return <div>Course not found</div>;
  }
  
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8 pr-80">
        <div className="max-w-4xl">
          <div className="mb-8">
            <Link to="/open-courses" className="text-neon-cyan hover:text-neon-purple transition-colors mb-4 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Open Courses
            </Link>
            <h1 className="text-4xl font-bold neon-text mb-2">{course.name}</h1>
            <p className="text-gray-400">{course.description}</p>
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 ${
                    step.status === 'completed' 
                      ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-glow-sm' 
                      : step.status === 'unlocked'
                      ? 'bg-neon-purple/20 border-neon-purple text-neon-purple shadow-neon-purple'
                      : 'bg-dark-card border-gray-500 text-gray-500'
                  }`}>
                    {step.status === 'completed' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : step.status === 'locked' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-0.5 h-20 ${
                      step.status === 'completed' ? 'bg-neon-cyan' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
                
                <Card className={`flex-1 ${step.status === 'locked' ? 'opacity-50' : ''}`} hover={step.status !== 'locked'}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <Badge status={step.status}>{step.status.toUpperCase()}</Badge>
                  </div>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  {step.status !== 'locked' && (
                    <button className="px-4 py-2 text-sm rounded bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-sm transition-all">
                      {step.status === 'completed' ? 'Review' : 'Start Learning'}
                    </button>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="fixed right-0 top-16 bottom-0 w-80 glass-card border-l border-neon-cyan/20 p-6 overflow-y-auto scrollbar-thin">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold neon-text mb-4">Quick Access</h3>
            <div className="space-y-2">
              <Link to={`/open-courses/${courseId}/competitions`} className="block w-full px-4 py-3 rounded-lg bg-dark-card border border-neon-cyan/30 text-neon-cyan hover:shadow-glow-sm transition-all text-center">
                Competitions
              </Link>
              <Link to={`/open-courses/${courseId}/leaderboard`} className="block w-full px-4 py-3 rounded-lg bg-dark-card border border-neon-purple/30 text-neon-purple hover:shadow-neon-purple transition-all text-center">
                Full Leaderboard
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neon-cyan mb-4">Top Learners</h3>
            <div className="space-y-3">
              {currentLeaderboard.map((user) => (
                <div key={user.rank} className="flex items-center gap-3 glass-card p-3 border-neon-cyan/20">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    user.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                    user.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                    user.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                    'bg-neon-cyan/20 text-neon-cyan'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.score} pts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
