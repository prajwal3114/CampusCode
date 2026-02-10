export default function Card({ children, className = '', hover = true, neonBorder = false }) {
  return (
    <div 
      className={`glass-card p-6 ${neonBorder ? 'neon-border' : ''} ${hover ? 'hover:shadow-glow-md hover:scale-[1.02]' : ''} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
