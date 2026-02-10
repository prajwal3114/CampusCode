import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Badge from '../components/ui/Badge';
import { courses } from '../data/coursesData';

export default function Chat() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const [activeRoom, setActiveRoom] = useState('general');
  const [messageInput, setMessageInput] = useState('');
  
  if (!course) {
    return <div>Course not found</div>;
  }

  const chatRooms = [
    { id: 'general', name: 'General Discussion', icon: '💬', unread: 0 },
    { id: 'help', name: 'Help & Support', icon: '🆘', unread: 3 },
    { id: 'resources', name: 'Resources Share', icon: '📚', unread: 0 },
    { id: 'projects', name: 'Project Showcase', icon: '🚀', unread: 1 },
    { id: 'competitions', name: 'Competitions', icon: '🏆', unread: 5 }
  ];

  const activeUsers = [
    { name: 'Alex Chen', avatar: 'AC', status: 'online', color: 'cyan' },
    { name: 'Sarah Kim', avatar: 'SK', status: 'online', color: 'purple' },
    { name: 'Mike Johnson', avatar: 'MJ', status: 'idle', color: 'cyan' },
    { name: 'Emma Davis', avatar: 'ED', status: 'online', color: 'purple' },
    { name: 'James Wilson', avatar: 'JW', status: 'online', color: 'cyan' },
    { name: 'Lisa Anderson', avatar: 'LA', status: 'idle', color: 'purple' },
    { name: 'David Lee', avatar: 'DL', status: 'offline', color: 'cyan' }
  ];

  const messages = [
    { id: 1, user: 'Alex Chen', avatar: 'AC', message: 'Anyone stuck on the recursion topic?', time: '10:23 AM', isMine: false, color: 'cyan' },
    { id: 2, user: 'Sarah Kim', avatar: 'SK', message: 'Check out the video in resources, it helped me!', time: '10:25 AM', isMine: false, color: 'purple' },
    { id: 3, user: 'You', avatar: 'JD', message: 'Thanks! I\'ll check it out right away.', time: '10:26 AM', isMine: true, color: 'gradient' },
    { id: 4, user: 'Mike Johnson', avatar: 'MJ', message: 'What\'s the deadline for this week\'s competition?', time: '10:28 AM', isMine: false, color: 'cyan' },
    { id: 5, user: 'Emma Davis', avatar: 'ED', message: 'Friday 11:59 PM', time: '10:29 AM', isMine: false, color: 'purple' },
    { id: 6, user: 'You', avatar: 'JD', message: 'Don\'t forget to register before tomorrow!', time: '10:30 AM', isMine: true, color: 'gradient' },
    { id: 7, user: 'James Wilson', avatar: 'JW', message: 'Does anyone have notes on hash tables?', time: '10:35 AM', isMine: false, color: 'cyan' },
    { id: 8, user: 'Lisa Anderson', avatar: 'LA', message: 'I just completed the stack challenge! 🎉', time: '10:40 AM', isMine: false, color: 'purple' },
    { id: 9, user: 'Alex Chen', avatar: 'AC', message: 'Congrats @Lisa! What was your approach?', time: '10:41 AM', isMine: false, color: 'cyan' }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 flex h-[calc(100vh-4rem)]">
        {/* Chat Rooms Sidebar */}
        <div className="w-64 glass-card border-r border-neon-cyan/20 flex flex-col">
          <div className="p-4 border-b border-neon-cyan/20">
            <Link to={`/open-courses/${courseId}`} className="text-neon-cyan hover:text-neon-purple transition-colors mb-3 inline-flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Course
            </Link>
            <h2 className="text-lg font-bold neon-text">{course.name}</h2>
            <p className="text-xs text-gray-500">Course Chat</p>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin p-3">
            <div className="mb-3">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2 px-2">Channels</p>
              <div className="space-y-1">
                {chatRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${
                      activeRoom === room.id
                        ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                        : 'text-gray-400 hover:bg-dark-hover hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{room.icon}</span>
                      <span className="text-sm">{room.name}</span>
                    </div>
                    {room.unread > 0 && (
                      <span className="bg-neon-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {room.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-neon-cyan/20">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-dark-hover">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center font-bold shadow-glow-sm">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">John Doe</p>
                <p className="text-xs text-gray-500">@johndoe_dev</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="glass-card border-b border-neon-cyan/20 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{chatRooms.find(r => r.id === activeRoom)?.icon}</span>
                <div>
                  <h3 className="font-bold text-white">{chatRooms.find(r => r.id === activeRoom)?.name}</h3>
                  <p className="text-sm text-gray-400">342 members • 87 online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg bg-dark-card border border-neon-cyan/30 flex items-center justify-center hover:shadow-glow-sm transition-all">
                  <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg bg-dark-card border border-neon-purple/30 flex items-center justify-center hover:shadow-neon-purple transition-all">
                  <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin space-y-4 bg-dark-bg/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isMine ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-lg ${
                  msg.isMine 
                    ? 'bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink'
                    : msg.color === 'cyan' 
                    ? 'bg-gradient-to-br from-neon-cyan to-neon-blue' 
                    : 'bg-gradient-to-br from-neon-purple to-neon-pink'
                } flex items-center justify-center font-bold text-sm shadow-glow-sm flex-shrink-0`}>
                  {msg.avatar}
                </div>
                <div className={`flex-1 max-w-2xl ${msg.isMine ? 'flex flex-col items-end' : ''}`}>
                  <div className={`flex items-center gap-2 mb-1 ${msg.isMine ? 'flex-row-reverse' : ''}`}>
                    <span className={`font-semibold ${msg.isMine ? 'text-neon-cyan' : 'text-white'}`}>
                      {msg.user}
                    </span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <div className={`px-4 py-3 rounded-lg ${
                    msg.isMine 
                      ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50'
                      : 'glass-card border-neon-cyan/20'
                  }`}>
                    <p className="text-gray-300">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card border-t border-neon-cyan/20 p-4">
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-lg bg-dark-card border border-neon-cyan/30 flex items-center justify-center hover:shadow-glow-sm transition-all">
                <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <input
                type="text"
                placeholder={`Message #${chatRooms.find(r => r.id === activeRoom)?.name}...`}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
              />
              <button className="w-10 h-10 rounded-lg bg-dark-card border border-neon-purple/30 flex items-center justify-center hover:shadow-neon-purple transition-all">
                <span className="text-xl">😊</span>
              </button>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md transition-all font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Active Users Sidebar */}
        <div className="w-60 glass-card border-l border-neon-cyan/20 overflow-y-auto scrollbar-thin">
          <div className="p-4 border-b border-neon-cyan/20">
            <h3 className="font-semibold text-white mb-1">Active Members</h3>
            <p className="text-xs text-gray-500">87 online</p>
          </div>
          <div className="p-3 space-y-2">
            {activeUsers.map((user, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-hover transition-all cursor-pointer">
                <div className="relative">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${
                    user.color === 'cyan' ? 'from-neon-cyan to-neon-blue' : 'from-neon-purple to-neon-pink'
                  } flex items-center justify-center font-bold text-xs`}>
                    {user.avatar}
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-dark-bg ${
                    user.status === 'online' ? 'bg-green-500' :
                    user.status === 'idle' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
