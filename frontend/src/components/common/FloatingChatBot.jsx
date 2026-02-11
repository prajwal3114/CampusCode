import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { courses } from '../../data/coursesData';
import { clubs } from '../../data/clubsData';

export default function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const location = useLocation();
  const params = useParams();

  const isOpenCoursePage = location.pathname.startsWith('/open-courses');
  const isClubPage = location.pathname.startsWith('/clubs');
  const shouldShow = isOpenCoursePage || isClubPage;

  const courseId = isOpenCoursePage ? location.pathname.split('/')[2] : null;
  const clubId = isClubPage ? location.pathname.split('/')[2] : null;
  
  const currentCourse = courseId ? courses.find(c => c.id === courseId) : null;
  const currentClub = clubId ? clubs.find(c => c.id === clubId) : null;

  const contextName = currentCourse?.name || currentClub?.name || (isOpenCoursePage ? 'Open Courses' : 'Clubs');
  const contextType = isOpenCoursePage ? 'course' : 'club';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = contextType === 'course'
        ? `👋 Hi! I'm your Open Course Assistant. How can I help you with ${contextName} today?`
        : `👋 Welcome! I'm your Club Assistant for ${contextName}. Need any help?`;
      
      setMessages([{
        id: 1,
        text: welcomeMessage,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  }, [isOpen, contextName, contextType]);

  const getDummyResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (contextType === 'course') {
      if (lowerMessage.includes('start') || lowerMessage.includes('begin')) {
        return "Great! To get started, check out the roadmap and complete the first unlocked step. Each step builds on the previous one.";
      }
      if (lowerMessage.includes('competition') || lowerMessage.includes('challenge')) {
        return "You can join competitions from the Competitions tab. They're a great way to test your skills!";
      }
      if (lowerMessage.includes('help') || lowerMessage.includes('stuck')) {
        return "I'm here to help! You can access course materials in Resources, join discussions in Chat, or check the Leaderboard to see how others are progressing.";
      }
      if (lowerMessage.includes('progress') || lowerMessage.includes('track')) {
        return "Your progress is tracked automatically as you complete each step. Check the roadmap to see your completion status!";
      }
      return "That's a great question! For specific course content, try the Resources section or join the course chat to discuss with other learners.";
    } else {
      if (lowerMessage.includes('join') || lowerMessage.includes('member')) {
        return "As a club member, you have full access to exclusive resources, competitions, and chat. Check the Members tab to connect with everyone!";
      }
      if (lowerMessage.includes('competition') || lowerMessage.includes('challenge')) {
        return "Club competitions are exclusive to members. Head to the Competitions tab to see what's currently running!";
      }
      if (lowerMessage.includes('resource') || lowerMessage.includes('material')) {
        return "Club resources are posted by organizers and members. Visit the Resources tab for the latest materials!";
      }
      if (lowerMessage.includes('organizer') || lowerMessage.includes('admin')) {
        return "If you need to contact the organizer, check the Members section to find club admins and moderators.";
      }
      return "That's interesting! For club-specific questions, try asking in the club chat where other members can help you out.";
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getDummyResponse(inputText),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!shouldShow) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isOpen ? 'w-96' : 'w-auto'
      }`}>
        {isOpen ? (
          <div className="glass-card border-neon-cyan/50 rounded-2xl overflow-hidden shadow-glow-lg h-[600px] flex flex-col">
            <div className={`px-6 py-4 border-b ${
              contextType === 'course' ? 'border-neon-cyan/20 bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10' : 'border-neon-purple/20 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                    contextType === 'course' ? 'from-neon-cyan to-neon-blue' : 'from-neon-purple to-neon-pink'
                  } flex items-center justify-center shadow-glow-sm`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${
                      contextType === 'course' ? 'text-neon-cyan' : 'text-neon-purple'
                    }`}>
                      {contextType === 'course' ? 'Course Assistant' : 'Club Assistant'}
                      {contextType === 'club' && (
                        <svg className="w-3 h-3 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </h3>
                    <p className="text-xs text-gray-400 truncate max-w-[200px]">{contextName}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-dark-hover hover:bg-dark-card transition-all text-gray-400 hover:text-white flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? contextType === 'course'
                          ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50'
                          : 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border border-neon-purple/50'
                        : 'glass-card border-gray-500/20'
                    }`}>
                      <p className="text-sm text-white">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">{message.timestamp}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass-card border-gray-500/20 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-neon-cyan/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:shadow-glow-sm transition-all text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    inputText.trim()
                      ? contextType === 'course'
                        ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 text-neon-cyan hover:shadow-glow-md'
                        : 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border border-neon-purple/50 text-neon-purple hover:shadow-neon-purple'
                      : 'bg-dark-card border border-gray-500/20 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative group">
            <button
              onClick={() => setIsOpen(true)}
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                contextType === 'course' 
                  ? 'from-neon-cyan to-neon-blue shadow-glow-lg hover:shadow-glow-xl' 
                  : 'from-neon-purple to-neon-pink shadow-neon-purple hover:shadow-xl'
              } flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
            
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-dark-card border border-neon-cyan/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              <p className="text-xs text-white font-semibold">Ask for help</p>
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neon-cyan/50"></div>
            </div>

            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
              contextType === 'course' ? 'bg-neon-cyan' : 'bg-neon-purple'
            } animate-ping`}></div>
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
              contextType === 'course' ? 'bg-neon-cyan' : 'bg-neon-purple'
            }`}></div>
          </div>
        )}
      </div>
    </>
  );
}
