import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { clubs, clubCompetitions } from '../data/clubsData';

export default function ClubCompetitions() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const competitions = clubCompetitions[clubId] || [];

  if (!club || club.status !== 'member') {
    return null;
  }

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
            <h1 className="text-4xl font-bold neon-text mb-2">Club Competitions</h1>
            <p className="text-gray-400">{club.name} • Members Only</p>
          </div>

          <div className="space-y-6">
            {competitions.map((competition) => (
              <Card key={competition.id} neonBorder className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full ${
                  competition.status === 'live' ? 'bg-green-500' :
                  competition.status === 'upcoming' ? 'bg-yellow-500' : 'bg-gray-500'
                }`}></div>

                <div className="pl-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{competition.title}</h3>
                        <Badge status={competition.status}>
                          {competition.status.toUpperCase()}
                        </Badge>
                        <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs border border-neon-purple/50 font-semibold">
                          CLUB ONLY
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{competition.description}</p>

                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{competition.startTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{competition.participants} participants</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {competition.status === 'live' && (
                        <Button variant="primary">Join Now</Button>
                      )}
                      {competition.status === 'upcoming' && (
                        <Button variant="secondary">Register</Button>
                      )}
                    </div>
                  </div>

                  {competition.status === 'live' && (
                    <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-green-400 font-semibold">Competition in progress</span>
                        </div>
                        <span className="text-gray-400 text-sm">Ends in 1h 15m</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
