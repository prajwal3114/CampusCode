export default function ProgressBar({ progress, showLabel = true, color = 'cyan' }) {
  const colors = {
    cyan: 'from-neon-cyan to-neon-blue',
    purple: 'from-neon-purple to-neon-pink',
    gradient: 'from-neon-cyan via-neon-purple to-neon-pink'
  };
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progress</span>
          <span className="text-sm font-semibold text-neon-cyan">{progress}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${colors[color]} rounded-full shadow-glow-sm transition-all duration-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
