import React from 'react';
import { Languages, Globe } from 'lucide-react';
import { useSpanishLanguage } from './SpanishLanguageProvider';

const SpanishToggle: React.FC = () => {
  const { isSpanish, setSpanish } = useSpanishLanguage();

  return (
    <div className="relative group">
      <button
        onClick={() => setSpanish(!isSpanish)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300
                   bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                   hover:bg-white/20 dark:hover:bg-gray-700/50
                   text-gray-800 dark:text-gray-200
                   border border-white/20 dark:border-gray-600/50
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                   dark:focus:ring-offset-gray-900
                   shadow-lg hover:shadow-xl"
        aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
        title={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
      >
        <Globe className="h-5 w-5 text-cyan-500" />
        <span className="hidden sm:flex items-center space-x-2">
          <span className="text-xl">{isSpanish ? '🇪🇸' : '🇺🇸'}</span>
          <span className="font-medium">{isSpanish ? 'Español' : 'English'}</span>
        </span>
        <span className="sm:hidden text-xl">{isSpanish ? '🇪🇸' : '🇺🇸'}</span>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 
                      bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      pointer-events-none whitespace-nowrap z-50">
        <div className="text-center">
          <div className="font-medium">
            {isSpanish ? 'Switch to English' : 'Cambiar a Español'}
          </div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                        border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </div>
  );
};

export default SpanishToggle;