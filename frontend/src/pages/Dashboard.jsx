import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';

export default function Dashboard() {
  const stats = [
    {
      title: 'Active Courses',
      value: '6',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'cyan'
    },
    {
      title: 'Competitions',
      value: '12',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: 'purple'
    },
    {
      title: 'Global Rank',
      value: '#127',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'cyan'
    },
    {
      title: 'Day Streak',
      value: '23',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      color: 'purple'
    }
  ];

  const quickNav = [
    {
      title: 'My Open Courses',
      description: 'Continue your learning journey',
      link: '/open-courses',
      icon: '🗺️',
      color: 'from-neon-cyan/20 to-neon-blue/20',
      border: 'border-neon-cyan/50'
    },
    {
      title: 'My Clubs',
      description: 'Access your coding clubs',
      link: '/clubs',
      icon: '👥',
      color: 'from-neon-purple/20 to-neon-pink/20',
      border: 'border-neon-purple/50'
    },
    {
      title: 'Active Competitions',
      description: 'Join live coding challenges',
      link: '/open-courses/data-structures/competitions',
      icon: '🏆',
      color: 'from-neon-cyan/20 to-neon-purple/20',
      border: 'border-neon-cyan/50'
    },
    {
      title: 'Leaderboards',
      description: 'Check your rankings',
      link: '/open-courses/data-structures/leaderboard',
      icon: '📊',
      color: 'from-neon-purple/20 to-neon-pink/20',
      border: 'border-neon-purple/50'
    },
    {
      title: 'Resources',
      description: 'Study materials & tutorials',
      link: '/resources',
      icon: '📚',
      color: 'from-neon-purple/20 to-neon-cyan/20',
      border: 'border-neon-purple/50'
    }
  ];

  const recentActivity = [
    { course: 'Data Structures', action: 'Completed: Hash Tables', time: '2 hours ago', progress: 65 },
    { course: 'Web Development', action: 'Started: React Fundamentals', time: '5 hours ago', progress: 42 },
    { course: 'Cloud Computing', action: 'Completed: Docker Basics', time: '1 day ago', progress: 73 }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold neon-text mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back, ready to continue learning?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} neonBorder className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                  stat.color === 'cyan' ? 'from-neon-cyan/10' : 'from-neon-purple/10'
                } to-transparent rounded-full blur-2xl`}></div>
                <div className="relative">
                  <div className={`text-${stat.color === 'cyan' ? 'neon-cyan' : 'neon-purple'} mb-3`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold neon-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.title}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickNav.map((item, index) => (
                <Link key={index} to={item.link}>
                  <Card className={`h-full bg-gradient-to-br ${item.color} border ${item.border} cursor-pointer group`}>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neon-purple mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <Card key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge status="completed">{activity.course}</Badge>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-white font-semibold mb-2">{activity.action}</p>
                      <ProgressBar progress={activity.progress} showLabel={false} color="gradient" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Upcoming</h2>
              <div className="space-y-4">
                <Card neonBorder className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <div className="pl-3">
                    <Badge status="live">LIVE NOW</Badge>
                    <h4 className="text-white font-semibold mt-2 mb-1">Weekly Coding Challenge</h4>
                    <p className="text-sm text-gray-400 mb-2">Data Structures & Algorithms</p>
                    <p className="text-xs text-gray-500">Ends in 1h 23m</p>
                  </div>
                </Card>

                <Card className="relative overflow-hidden border border-yellow-500/30">
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                  <div className="pl-3">
                    <Badge status="upcoming">UPCOMING</Badge>
                    <h4 className="text-white font-semibold mt-2 mb-1">API Design Challenge</h4>
                    <p className="text-sm text-gray-400 mb-2">Web Development</p>
                    <p className="text-xs text-gray-500">Starts Feb 13, 7:00 PM</p>
                  </div>
                </Card>

                <Card className="text-center py-6 border border-neon-purple/30">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm text-gray-400 mb-3">Complete 3 more topics to unlock</p>
                  <p className="text-lg font-bold neon-text">Graph Algorithms</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
