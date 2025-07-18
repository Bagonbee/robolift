import React, { useState, useRef, useEffect } from 'react';
import { Languages, Loader2, Globe, Check, Search, MapPin, Calendar, DollarSign } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { 
    currentLanguage, 
    isTranslating, 
    translatePage, 
    getCurrentLanguage, 
    detectUserLanguage,
    formatDate,
    formatNumber,
    formatCurrency,
    languages 
  } = useTranslation();

  const currentLang = getCurrentLanguage();
  const detectedLang = detectUserLanguage();

  // Get unique regions
  const regions = ['all', ...Array.from(new Set(languages.map(lang => lang.region).filter(Boolean)))];

  const filteredLanguages = languages.filter(lang => {
    const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lang.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || lang.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const popularLanguages = ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ar', 'hi', 'pt', 'ru', 'ko', 'vi'];
  const popularLangs = languages.filter(lang => popularLanguages.includes(lang.code));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setSelectedRegion('all');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = async (langCode: string) => {
    setIsOpen(false);
    setSearchTerm('');
    setSelectedRegion('all');
    await translatePage(langCode);
  };

  const getRegionFlag = (region: string) => {
    const regionFlags: Record<string, string> = {
      'North America': '🌎',
      'Europe': '🇪🇺',
      'East Asia': '🌏',
      'Southeast Asia': '🌏',
      'South Asia': '🌏',
      'Middle East': '🌍',
      'Africa': '🌍'
    };
    return regionFlags[region] || '🌐';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Detection Banner */}
      {detectedLang && detectedLang !== currentLanguage && (
        <div className="absolute -top-16 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-50 shadow-lg animate-slide-up">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>Detected: {languages.find(l => l.code === detectedLang)?.nativeName}</span>
            <button
              onClick={() => handleLanguageSelect(detectedLang)}
              className="ml-2 bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
            >
              Switch
            </button>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTranslating}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300
                   bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                   hover:bg-white/20 dark:hover:bg-gray-700/50
                   text-gray-800 dark:text-gray-200
                   border border-white/20 dark:border-gray-600/50
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                   dark:focus:ring-offset-gray-900
                   disabled:opacity-50 disabled:cursor-not-allowed
                   shadow-lg hover:shadow-xl"
        aria-label="Select language"
        title={`Current language: ${currentLang.nativeName}`}
      >
        {isTranslating ? (
          <Loader2 className="h-5 w-5 animate-spin text-cyan-500" />
        ) : (
          <Languages className="h-5 w-5 text-cyan-500" />
        )}
        <span className="hidden sm:flex items-center space-x-2">
          <span className="text-xl">{currentLang.flag}</span>
          <span className="font-medium">{currentLang.nativeName}</span>
        </span>
        <span className="sm:hidden text-xl">{currentLang.flag}</span>
        {isTranslating && (
          <span className="hidden sm:block text-sm text-cyan-500 animate-pulse">
            Translating...
          </span>
        )}
      </button>

      {/* Enhanced Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-[32rem] overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Language Selection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Choose from {languages.length} languages
                </p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           placeholder-gray-500 dark:placeholder-gray-400
                           transition-all duration-200"
              />
            </div>

            {/* Region Filter */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedRegion === region
                      ? 'bg-cyan-500 text-white shadow-md'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                  }`}
                >
                  {region === 'all' ? '🌐 All' : `${getRegionFlag(region)} ${region}`}
                </button>
              ))}
            </div>
          </div>

          {/* Language List */}
          <div className="max-h-80 overflow-y-auto">
            {!searchTerm && selectedRegion === 'all' && (
              <>
                {/* Popular Languages */}
                <div className="p-4">
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-2 py-2 flex items-center">
                    <span className="mr-2">⭐</span>
                    Popular Languages
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {popularLangs.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        disabled={isTranslating}
                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200
                                   hover:bg-gray-100 dark:hover:bg-gray-700
                                   disabled:opacity-50 disabled:cursor-not-allowed
                                   ${currentLanguage === lang.code 
                                     ? 'bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 ring-2 ring-cyan-500' 
                                     : 'hover:shadow-md'}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <div className="flex-1 text-left min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white truncate">
                            {lang.nativeName}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {lang.name}
                          </div>
                        </div>
                        {currentLanguage === lang.code && (
                          <Check className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700"></div>
              </>
            )}

            {/* All Languages */}
            <div className="p-4">
              {(!searchTerm && selectedRegion === 'all') && (
                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-2 py-2 flex items-center">
                  <span className="mr-2">🌍</span>
                  All Languages
                </h4>
              )}
              
              {filteredLanguages.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Globe className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No languages found</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      disabled={isTranslating}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200
                                 hover:bg-gray-100 dark:hover:bg-gray-700
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 ${currentLanguage === lang.code 
                                   ? 'bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 ring-2 ring-cyan-500' 
                                   : 'hover:shadow-md'}`}
                    >
                      <span className="text-lg flex-shrink-0">{lang.flag}</span>
                      <div className="flex-1 text-left min-w-0">
                        <div className="font-medium text-gray-900 dark:text-white truncate">
                          {lang.nativeName}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {lang.name} {lang.region && `• ${lang.region}`} • {lang.currency}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {lang.rtl && (
                          <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full font-medium">
                            RTL
                          </span>
                        )}
                        {currentLanguage === lang.code && (
                          <Check className="h-4 w-4 text-cyan-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <div className="space-y-3">
              {/* Current Language Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">{getCurrentLanguage().flag}</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {getCurrentLanguage().nativeName}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(new Date())}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>#</span>
                    <span>{formatNumber(1234.56)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{formatCurrency(99.99)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Powered by MyMemory</span>
                </div>
                <span>{filteredLanguages.length} languages available</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;