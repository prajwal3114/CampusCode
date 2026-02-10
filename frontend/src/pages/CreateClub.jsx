import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';

export default function CreateClub() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    description: '',
    category: 'web-development',
    visibility: 'private'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/organizer/clubs');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Create New Club
              </span>
            </h1>
            <p className="text-gray-400 mt-2">Start a new coding community for your university</p>
          </div>

          <Card neonBorder className="border-yellow-500/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Club Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
                  placeholder="e.g., Stanford CS Club"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  University / Organization *
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
                  placeholder="e.g., Stanford University"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all resize-none"
                  placeholder="Describe your club's purpose and activities..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all"
                >
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science & ML</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="algorithms">Algorithms & Data Structures</option>
                  <option value="mobile-dev">Mobile Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Visibility *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="private"
                      checked={formData.visibility === 'private'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border text-center transition-all ${
                      formData.visibility === 'private'
                        ? 'bg-yellow-500/20 border-yellow-500 shadow-lg shadow-yellow-500/30'
                        : 'bg-dark-card border-gray-500'
                    }`}>
                      <div className="text-2xl mb-2">🔒</div>
                      <p className={`font-semibold ${formData.visibility === 'private' ? 'text-yellow-500' : 'text-gray-400'}`}>
                        Private
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Invite or approval required</p>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="public"
                      checked={formData.visibility === 'public'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border text-center transition-all ${
                      formData.visibility === 'public'
                        ? 'bg-neon-cyan/20 border-neon-cyan shadow-glow-sm'
                        : 'bg-dark-card border-gray-500'
                    }`}>
                      <div className="text-2xl mb-2">🌐</div>
                      <p className={`font-semibold ${formData.visibility === 'public' ? 'text-neon-cyan' : 'text-gray-400'}`}>
                        Public
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Anyone can join</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
                >
                  Create Club
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/organizer/clubs')}
                  className="px-6 py-3 rounded-lg bg-dark-card border border-gray-500 text-gray-400 hover:bg-dark-hover transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
