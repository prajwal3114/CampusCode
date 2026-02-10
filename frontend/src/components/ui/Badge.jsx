export default function Badge({ children, status = 'default' }) {
  const statusStyles = {
    live: 'bg-green-500/20 text-green-400 border-green-500/50 shadow-green-500/30',
    upcoming: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/30',
    ended: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
    locked: 'bg-red-500/20 text-red-400 border-red-500/50',
    unlocked: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50 shadow-glow-sm',
    completed: 'bg-neon-purple/20 text-neon-purple border-neon-purple/50 shadow-neon-purple',
    default: 'bg-dark-card text-gray-400 border-gray-500/50'
  };
  
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[status]} transition-all`}>
      {status === 'live' && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>}
      {children}
    </span>
  );
}
