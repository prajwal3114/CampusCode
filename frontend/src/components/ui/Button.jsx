export default function Button({ children, variant = 'primary', onClick, className = '', disabled = false }) {
  const variants = {
    primary: 'cyber-button',
    secondary: 'px-6 py-3 rounded-md bg-dark-card border border-neon-purple/50 text-neon-purple hover:shadow-neon-purple hover:scale-105 transition-all duration-300',
    danger: 'px-6 py-3 rounded-md bg-red-500/20 border border-red-500/50 text-red-400 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300',
    ghost: 'px-6 py-3 rounded-md text-gray-300 hover:bg-dark-hover hover:text-neon-cyan transition-all duration-300'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
