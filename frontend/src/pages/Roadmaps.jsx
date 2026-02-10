import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import Button from '../components/ui/Button';
import { courses } from '../data/coursesData';

export default function Roadmaps() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold neon-text mb-2">Open Courses</h1>
            <p className="text-gray-400">Free public courses available to everyone</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} neonBorder className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div className={`w-3 h-3 rounded-full ${course.progress > 50 ? 'bg-neon-cyan' : 'bg-neon-purple'} animate-pulse`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                  
                  <ProgressBar progress={course.progress} color={course.color} />
                  
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <Link to={`/open-courses/${course.id}`}>
                      <button className="w-full px-3 py-2 text-sm rounded bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-sm transition-all">
                        View Course
                      </button>
                    </Link>
                    <Link to={`/open-courses/${course.id}/competitions`}>
                      <button className="w-full px-3 py-2 text-sm rounded bg-dark-card border border-neon-purple/30 text-neon-purple hover:shadow-neon-purple transition-all">
                        Compete
                      </button>
                    </Link>
                    <Link to={`/open-courses/${course.id}/leaderboard`}>
                      <button className="w-full px-3 py-2 text-sm rounded bg-dark-card border border-neon-cyan/30 text-neon-cyan hover:shadow-glow-sm transition-all">
                        Leaderboard
                      </button>
                    </Link>
                    <Link to={`/open-courses/${course.id}/chat`}>
                      <button className="w-full px-3 py-2 text-sm rounded bg-dark-card border border-neon-purple/30 text-neon-purple hover:shadow-neon-purple transition-all">
                        Chat
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
