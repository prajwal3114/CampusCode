import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Tabs from '../components/ui/Tabs';
import ProgressBar from '../components/ui/ProgressBar';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const userStats = [
    { label: 'Courses Completed', value: '4', icon: '📚' },
    { label: 'Competitions Joined', value: '18', icon: '🏆' },
    { label: 'Global Rank', value: '#127', icon: '📊' },
    { label: 'Total Points', value: '2,845', icon: '⭐' }
  ];

  const skills = [
    { name: 'JavaScript', level: 85, color: 'cyan' },
    { name: 'React', level: 78, color: 'purple' },
    { name: 'Python', level: 92, color: 'cyan' },
    { name: 'Data Structures', level: 88, color: 'purple' },
    { name: 'System Design', level: 65, color: 'cyan' }
  ];

  const achievements = [
    { title: 'First Victory', description: 'Won your first competition', icon: '🥇', earned: true },
    { title: 'Speed Demon', description: 'Completed 10 challenges under 30 minutes', icon: '⚡', earned: true },
    { title: 'Streak Master', description: 'Maintain a 30-day learning streak', icon: '🔥', earned: true },
    { title: 'Code Ninja', description: 'Solve 100 algorithm problems', icon: '🥷', earned: true },
    { title: 'Team Player', description: 'Collaborate on 5 group projects', icon: '🤝', earned: false },
    { title: 'Marathon Runner', description: 'Complete 10 courses', icon: '🏃', earned: false }
  ];

  const activityData = [
    { date: 'Feb 10, 2026', action: 'Completed Hash Tables module', course: 'Data Structures', points: 150 },
    { date: 'Feb 9, 2026', action: 'Ranked #3 in Weekly Challenge', course: 'Algorithms', points: 300 },
    { date: 'Feb 8, 2026', action: 'Started React Fundamentals', course: 'Web Development', points: 50 },
    { date: 'Feb 7, 2026', action: 'Completed Docker Basics', course: 'Cloud Computing', points: 200 },
    { date: 'Feb 6, 2026', action: 'Participated in API Design Challenge', course: 'Web Development', points: 180 }
  ];

  const competitionHistory = [
    { name: 'Weekly Coding Challenge', rank: '3rd', date: 'Feb 9, 2026', score: 967, status: 'ended' },
    { name: 'Hash Table Mastery', rank: '12th', date: 'Feb 5, 2026', score: 834, status: 'ended' },
    { name: 'Graph Algorithms Sprint', rank: '7th', date: 'Feb 1, 2026', score: 892, status: 'ended' },
    { name: 'Build a Dashboard', rank: '5th', date: 'Jan 28, 2026', score: 915, status: 'ended' }
  ];

  const activityTab = (
    <div className="space-y-3">
      {activityData.map((activity, index) => (
        <Card key={index} className="flex items-center justify-between" hover={false}>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm text-gray-500">{activity.date}</span>
              <Badge status="completed">{activity.course}</Badge>
            </div>
            <p className="text-white font-semibold">{activity.action}</p>
          </div>
          <div className="text-neon-cyan font-bold">+{activity.points} pts</div>
        </Card>
      ))}
    </div>
  );

  const achievementsTab = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          className={`text-center ${achievement.earned ? 'border-neon-cyan/50' : 'opacity-50 border-gray-500/30'}`}
          hover={achievement.earned}
        >
          <div className="text-4xl mb-3">{achievement.icon}</div>
          <h4 className={`font-bold mb-1 ${achievement.earned ? 'text-neon-cyan' : 'text-gray-500'}`}>
            {achievement.title}
          </h4>
          <p className="text-sm text-gray-400">{achievement.description}</p>
          {achievement.earned && (
            <div className="mt-3 text-xs text-green-400 flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Earned
            </div>
          )}
        </Card>
      ))}
    </div>
  );

  const competitionsTab = (
    <div className="space-y-3">
      {competitionHistory.map((comp, index) => (
        <Card key={index} neonBorder className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="text-white font-semibold">{comp.name}</h4>
              <Badge status="ended">ENDED</Badge>
            </div>
            <p className="text-sm text-gray-400">{comp.date}</p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold mb-1 ${
              comp.rank === '3rd' ? 'text-orange-400' : 
              parseInt(comp.rank) <= 10 ? 'text-neon-cyan' : 
              'text-gray-400'
            }`}>
              {comp.rank}
            </div>
            <p className="text-sm text-gray-500">{comp.score} pts</p>
          </div>
        </Card>
      ))}
    </div>
  );

  const tabs = [
    { label: 'Activity', content: activityTab },
    { label: 'Achievements', content: achievementsTab },
    { label: 'Competitions', content: competitionsTab }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-6xl mx-auto">
          <Card neonBorder className="mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 shadow-glow-lg">
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                    <span className="text-4xl font-bold neon-text">JD</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-bg"></div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                  <h1 className="text-3xl font-bold text-white">John Doe</h1>
                  <Badge status="unlocked">PRO</Badge>
                </div>
                <p className="text-neon-cyan mb-1">@johndoe_dev</p>
                <p className="text-gray-400 mb-4">Stanford University • Computer Science</p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs border border-neon-cyan/50">
                    Full Stack Developer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs border border-neon-purple/50">
                    Algorithm Enthusiast
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs border border-neon-cyan/50">
                    ML Explorer
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md transition-all"
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>
            </div>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {userStats.map((stat, index) => (
              <Card key={index} neonBorder className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold neon-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neon-purple mb-4">Skills</h2>
            <Card neonBorder>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className={`text-neon-${skill.color} font-bold`}>{skill.level}%</span>
                    </div>
                    <ProgressBar progress={skill.level} showLabel={false} color={skill.color} />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">Timeline</h2>
            <Card neonBorder>
              <Tabs tabs={tabs} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
