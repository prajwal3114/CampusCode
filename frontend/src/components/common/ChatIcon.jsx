import { useState } from 'react';

export default function ChatIcon({ courseId }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple shadow-neon-cyan flex items-center justify-center cursor-pointer hover:shadow-glow-lg transition-all duration-300 z-50 hover:scale-110"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 h-[500px] glass-card border border-neon-cyan/30 shadow-neon-cyan z-50 flex flex-col rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border-b border-neon-cyan/30 px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-neon-cyan">Course Discussion</h3>
              <p className="text-xs text-gray-400">Ask questions & collaborate</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin space-y-4">
            {[
              { user: 'Alex Chen', message: 'Anyone stuck on the recursion topic?', time: '2m ago' },
              { user: 'Sarah Kim', message: 'Check out the video in resources, it helped me!', time: '5m ago' },
              { user: 'Mike Johnson', message: 'What\'s the deadline for this week\'s competition?', time: '12m ago' },
              { user: 'Emma Davis', message: 'Friday 11:59 PM', time: '13m ago' }
            ].map((msg, idx) => (
              <div key={idx} className="glass-card p-3 border-neon-cyan/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-neon-cyan">{msg.user}</span>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <p className="text-sm text-gray-300">{msg.message}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-neon-cyan/30 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-all text-sm"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-sm transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
