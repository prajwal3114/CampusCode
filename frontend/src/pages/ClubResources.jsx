import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { clubs, clubResources } from '../data/clubsData';

export default function ClubResources() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const resources = clubResources[clubId] || [];

  if (!club || club.status !== 'member') {
    return null;
  }

  const typeIcons = {
    article: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    video: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    practice: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to={`/clubs/${clubId}/dashboard`} className="text-neon-cyan hover:text-neon-purple transition-colors mb-4 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Club
            </Link>
            <h1 className="text-4xl font-bold neon-text mb-2">Club Resources</h1>
            <p className="text-gray-400">{club.name} • Members Only</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} neonBorder className="cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-neon-cyan">
                    {typeIcons[resource.type]}
                  </div>
                  <Badge status={
                    resource.difficulty === 'beginner' ? 'unlocked' :
                    resource.difficulty === 'intermediate' ? 'upcoming' : 'locked'
                  }>
                    {resource.difficulty.toUpperCase()}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {resource.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{resource.postedBy}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{resource.date}</span>
                    <span className="text-neon-cyan">{resource.downloads} downloads</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-sm transition-all text-sm font-semibold">
                  Download
                </button>
              </Card>
            ))}
          </div>

          {resources.length === 0 && (
            <Card className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No resources yet</h3>
              <p className="text-gray-500">Club resources will appear here</p>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
