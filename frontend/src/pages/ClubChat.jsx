import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { clubs } from '../data/clubsData';

export default function ClubChat() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const [activeRoom, setActiveRoom] = useState('general');
  const [messageInput, setMessageInput] = useState('');
  
  if (!club || club.status !== 'member') {
    return null;
  }

  const chatRooms = [
    { id: 'general', name: 'General Chat', icon: '💬', unread: 0 },
    { id: 'announcements', name: 'Announcements', icon: '📢', unread: 2 },
    { id: 'resources', name: 'Resources', icon: '📚', unread: 0 },
    { id: 'competitions', name: 'Competitions', icon: '🏆', unread: 3 },
    { id: 'random', name: 'Random', icon: '🎲', unread: 0 }
  ];

  const activeUsers = [
    { name: 'Alex Chen', avatar: 'AC', status: 'online', color: 'cyan', role: 'organizer' },
    { name: 'Sarah Kim', avatar: 'SK', status: 'online', color: 'purple', role: 'moderator' },
    { name: 'Mike Johnson', avatar: 'MJ', status: 'idle', color: 'cyan', role: 'member' },
    { name: 'Emma Davis', avatar: 'ED', status: 'online', color: 'purple', role: 'member' },
    { name: 'James Wilson', avatar: 'JW', status: 'online', color: 'cyan', role: 'member' }
  ];

  const messages = [
    { id: 1, user: 'Alex Chen', avatar: 'AC', message: 'Welcome to the club chat!', time: '10:00 AM', isMine: false, color: 'cyan', role: 'organizer' },
    { id: 2, user: 'Sarah Kim', avatar: 'SK', message: 'Don\'t forget about tomorrow\'s competition!', time: '10:15 AM', isMine: false, color: 'purple', role: 'moderator' },
    { id: 3, user: 'You', avatar: 'JD', message: 'Thanks! Excited to participate.', time: '10:20 AM', isMine: true, color: 'gradient', role: 'member' },
    { id: 4, user: 'Mike Johnson', avatar: 'MJ', message: 'Anyone working on the hash tables assignment?', time: '10:25 AM', isMine: false, color: 'cyan', role: 'member' },
    { id: 5, user: 'Emma Davis', avatar: 'ED', message: 'Yes! I just completed it. Happy to help.', time: '10:27 AM', isMine: false, color: 'purple', role: 'member' }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 flex h-[calc(100vh-4rem)]">
        <div className="w-64 glass-card border-r border-neon-cyan/20 flex flex-col">
          <div className="p-4 border-b border-neon-cyan/20">
            <Link to={`/clubs/${clubId}/dashboard`} className="text-neon-cyan hover:text-neon-purple transition-colors mb-3 inline-flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Club
            </Link>
            <h2 className="text-lg font-bold neon-text">{club.name}</h2>
            <p className="text-xs text-gray-500">Club Chat</p>
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

        <div className="flex-1 flex flex-col">
          <div className="glass-card border-b border-neon-cyan/20 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{chatRooms.find(r => r.id === activeRoom)?.icon}</span>
                <div>
                  <h3 className="font-bold text-white">{chatRooms.find(r => r.id === activeRoom)?.name}</h3>
                  <p className="text-sm text-gray-400">{club.members} members • {activeUsers.length} online</p>
                </div>
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
                    {msg.role === 'organizer' && (
                      <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/50">
                        ORG
                      </span>
                    )}
                    {msg.role === 'moderator' && (
                      <span className="text-xs px-2 py-0.5 rounded bg-neon-purple/20 text-neon-purple border border-neon-purple/50">
                        MOD
                      </span>
                    )}
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
              <input
                type="text"
                placeholder={`Message #${chatRooms.find(r => r.id === activeRoom)?.name}...`}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all"
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md transition-all font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="w-60 glass-card border-l border-neon-cyan/20 overflow-y-auto scrollbar-thin">
          <div className="p-4 border-b border-neon-cyan/20">
            <h3 className="font-semibold text-white mb-1">Members</h3>
            <p className="text-xs text-gray-500">{activeUsers.length} online</p>
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
                    user.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
