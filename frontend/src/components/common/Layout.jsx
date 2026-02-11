import FloatingChatBot from './FloatingChatBot';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
      <FloatingChatBot />
    </div>
  );
}
