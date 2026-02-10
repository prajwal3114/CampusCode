import { useState } from 'react';

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="w-full">
      <div className="flex gap-2 mb-6 border-b border-neon-cyan/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
              activeTab === index
                ? 'text-neon-cyan'
                : 'text-gray-400 hover:text-neon-cyan/70'
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple shadow-glow-sm"></div>
            )}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
