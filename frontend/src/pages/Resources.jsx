import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { resourcesData } from '../data/resourcesData';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredResources = resourcesData.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
      const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
      
      return matchesSearch && matchesType && matchesDifficulty && matchesCategory;
    })
  })).filter(category => category.items.length > 0);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold neon-text mb-2">Learning Resources</h1>
            <p className="text-gray-400">Curated articles, videos, and practice materials</p>
          </div>

          <div className="glass-card p-6 border-neon-cyan/30 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Search Resources</label>
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                >
                  <option value="all">All Categories</option>
                  {resourcesData.map((cat) => (
                    <option key={cat.category} value={cat.category}>{cat.category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                >
                  <option value="all">All Types</option>
                  <option value="article">Articles</option>
                  <option value="video">Videos</option>
                  <option value="practice">Practice</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {filteredResources.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className={`text-2xl font-bold text-neon-${category.color}`}>
                    {category.category}
                  </h2>
                  <span className="text-gray-500">({category.items.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((resource, index) => (
                    <Card
                      key={index}
                      className={`border-neon-${category.color}/30 cursor-pointer group`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`text-neon-${category.color}`}>
                          {typeIcons[resource.type]}
                        </div>
                        <Badge
                          status={
                            resource.difficulty === 'beginner' ? 'unlocked' :
                            resource.difficulty === 'intermediate' ? 'upcoming' :
                            'locked'
                          }
                        >
                          {resource.difficulty.toUpperCase()}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                        {resource.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{resource.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{resource.duration}</span>
                        </div>
                      </div>

                      <button className={`w-full px-4 py-2 rounded-lg bg-gradient-to-r ${
                        category.color === 'cyan'
                          ? 'from-neon-cyan/20 to-neon-blue/20 border-neon-cyan/50 text-neon-cyan hover:shadow-glow-sm'
                          : 'from-neon-purple/20 to-neon-pink/20 border-neon-purple/50 text-neon-purple hover:shadow-neon-purple'
                      } border transition-all text-sm font-semibold`}>
                        {resource.type === 'article' ? 'Read' : resource.type === 'video' ? 'Watch' : 'Practice'}
                      </button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {filteredResources.length === 0 && (
              <Card className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No resources found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
