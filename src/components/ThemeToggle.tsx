import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light Mode', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Dark Mode', color: 'text-blue-400' },
    { value: 'system', icon: Monitor, label: 'System', color: 'text-gray-500' }
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[0];

  return (
    <div className="relative group">
      <button
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.value === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex].value as any);
        }}
        className="relative p-3 rounded-xl transition-all duration-300 ease-in-out
                   bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                   hover:bg-white/20 dark:hover:bg-gray-700/50
                   border border-white/20 dark:border-gray-600/50
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                   dark:focus:ring-offset-gray-900
                   shadow-lg hover:shadow-xl
                   group-hover:scale-105"
        aria-label={`Switch to next theme (current: ${currentTheme.label})`}
        title={`Current: ${currentTheme.label}${theme === 'system' ? ` (${systemTheme})` : ''}`}
      >
        <div className="relative w-6 h-6">
          {themes.map((themeOption, index) => {
            const Icon = themeOption.icon;
            const isActive = theme === themeOption.value;
            const isSystem = theme === 'system' && themeOption.value === systemTheme;
            
            return (
              <Icon 
                key={themeOption.value}
                className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out
                           ${themeOption.color}
                           ${isActive || isSystem
                             ? 'opacity-100 rotate-0 scale-100' 
                             : 'opacity-0 rotate-90 scale-75'}`}
                style={{
                  transform: `rotate(${isActive || isSystem ? 0 : index * 120}deg) scale(${isActive || isSystem ? 1 : 0.75})`,
                }}
              />
            );
          })}
        </div>
        
        {/* Indicator dots */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {themes.map((themeOption) => (
            <div
              key={themeOption.value}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                theme === themeOption.value
                  ? 'bg-cyan-500 scale-100'
                  : 'bg-gray-400 dark:bg-gray-600 scale-75 opacity-50'
              }`}
            />
          ))}
        </div>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 
                      bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      pointer-events-none whitespace-nowrap z-50">
        <div className="text-center">
          <div className="font-medium">{currentTheme.label}</div>
          {theme === 'system' && (
            <div className="text-xs text-gray-300">Currently: {systemTheme}</div>
          )}
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                        border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;