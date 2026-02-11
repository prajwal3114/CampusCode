import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Tabs from '../components/ui/Tabs';
import ProgressBar from '../components/ui/ProgressBar';
import Toast from '../components/ui/Toast';

export default function Profile() {
  const { user } = useAuth();
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    username: 'johndoe_dev',
    email: 'john.doe@stanford.edu',
    college: 'Stanford University',
    bio: 'Computer Science',
    avatar: null,
    tags: ['Full Stack Developer', 'Algorithm Enthusiast', 'ML Explorer']
  });

  const [editForm, setEditForm] = useState({ ...profileData });
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfileData(parsed);
      setEditForm(parsed);
    }
  }, []);

  const handleEditChange = (field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && editForm.tags.length < 5) {
      setEditForm(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (index) => {
    setEditForm(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    if (!editForm.fullName.trim() || !editForm.username.trim()) {
      setToastMessage('Name and username are required');
      setShowToast(true);
      return;
    }

    setProfileData(editForm);
    localStorage.setItem('userProfile', JSON.stringify(editForm));
    setIsEditing(false);
    setToastMessage('Profile updated successfully');
    setShowToast(true);
  };

  const handleCancel = () => {
    setEditForm({ ...profileData });
    setIsEditing(false);
  };

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
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="ml-64 mt-16 p-8">
        <div className="max-w-6xl mx-auto">
          <Card neonBorder className="mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <div 
                  onClick={() => isEditing && fileInputRef.current?.click()}
                  className={`w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 shadow-glow-lg ${isEditing ? 'cursor-pointer hover:shadow-glow-xl transition-all' : ''}`}
                >
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                    {(isEditing ? editForm.avatar : profileData.avatar) ? (
                      <img 
                        src={isEditing ? editForm.avatar : profileData.avatar} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold neon-text">
                        {(isEditing ? editForm.fullName : profileData.fullName).split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                </div>
                {isEditing && (
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-neon-cyan rounded-full border-4 border-dark-bg flex items-center justify-center cursor-pointer hover:bg-neon-purple transition-colors" onClick={() => fileInputRef.current?.click()}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
                {!isEditing && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-bg"></div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={editForm.fullName}
                        onChange={(e) => handleEditChange('fullName', e.target.value)}
                        className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Username *</label>
                      <input
                        type="text"
                        value={editForm.username}
                        onChange={(e) => handleEditChange('username', e.target.value)}
                        className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Email (read-only)</label>
                      <input
                        type="email"
                        value={editForm.email}
                        disabled
                        className="w-full px-4 py-2 bg-dark-hover border border-gray-500/30 rounded-lg text-gray-500 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">
                        {user?.role === 'ORGANIZER' ? 'Organization' : 'College'}
                      </label>
                      <input
                        type="text"
                        value={editForm.college}
                        onChange={(e) => handleEditChange('college', e.target.value)}
                        className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                        placeholder={user?.role === 'ORGANIZER' ? 'Organization name' : 'College name'}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Bio</label>
                      <input
                        type="text"
                        value={editForm.bio}
                        onChange={(e) => handleEditChange('bio', e.target.value)}
                        className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                        placeholder="A short bio about yourself"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Skills/Tags (max 5)</label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                          className="flex-1 px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
                          placeholder="Add a skill or tag"
                          disabled={editForm.tags.length >= 5}
                        />
                        <button
                          onClick={handleAddTag}
                          disabled={editForm.tags.length >= 5 || !newTag.trim()}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {editForm.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs border border-neon-cyan/50 flex items-center gap-2"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(index)}
                              className="hover:text-red-400 transition-colors"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                      <h1 className="text-3xl font-bold text-white">{profileData.fullName}</h1>
                      <Badge status="unlocked">{user?.role === 'ORGANIZER' ? 'ORGANIZER' : 'PRO'}</Badge>
                    </div>
                    <p className="text-neon-cyan mb-1">@{profileData.username}</p>
                    <p className="text-gray-400 mb-4">{profileData.college} • {profileData.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {profileData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs border ${
                            index % 2 === 0
                              ? 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50'
                              : 'bg-neon-purple/20 text-neon-purple border-neon-purple/50'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-6 py-3 rounded-lg bg-dark-card border border-gray-500/50 text-gray-400 hover:text-white hover:border-gray-400 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md transition-all"
                    >
                      Save Profile
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md transition-all"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
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

          {user?.role === 'ORGANIZER' ? (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Managed Clubs
              </h2>
              <Card neonBorder>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Stanford CS Club', members: 234, status: 'Active' },
                    { name: 'Advanced Algorithms', members: 189, status: 'Active' },
                    { name: 'Web Dev Masters', members: 156, status: 'Active' },
                    { name: 'ML Research Group', members: 98, status: 'Active' }
                  ].map((club, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-dark-hover rounded-lg border border-yellow-400/30">
                      <div>
                        <h4 className="text-white font-semibold mb-1">{club.name}</h4>
                        <p className="text-sm text-gray-400">{club.members} members</p>
                      </div>
                      <Badge status="unlocked">{club.status}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ) : (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neon-purple mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Joined Clubs
              </h2>
              <Card neonBorder>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Stanford CS Club', role: 'Member', progress: 78 },
                    { name: 'MIT Web Developers', role: 'Member', progress: 65 },
                    { name: 'Berkeley ML Research', role: 'Active', progress: 92 }
                  ].map((club, index) => (
                    <div key={index} className="p-4 bg-dark-hover rounded-lg border border-neon-purple/30">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{club.name}</h4>
                        <Badge status="member">{club.role}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400">Activity</span>
                        <span className="text-neon-cyan font-semibold">{club.progress}%</span>
                      </div>
                      <ProgressBar progress={club.progress} showLabel={false} color="purple" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

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
