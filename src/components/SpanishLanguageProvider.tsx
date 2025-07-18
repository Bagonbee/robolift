import React, { createContext, useContext, useState, useEffect } from 'react';
import spanishTranslations from '../translations/spanish';

interface SpanishLanguageContextType {
  isSpanish: boolean;
  setSpanish: (isSpanish: boolean) => void;
  t: (key: string, fallback?: string) => string;
  formatDate: (date: Date) => string;
  formatNumber: (number: number) => string;
  formatCurrency: (amount: number) => string;
}

const SpanishLanguageContext = createContext<SpanishLanguageContextType | undefined>(undefined);

export const useSpanishLanguage = () => {
  const context = useContext(SpanishLanguageContext);
  if (!context) {
    throw new Error('useSpanishLanguage must be used within a SpanishLanguageProvider');
  }
  return context;
};

interface SpanishLanguageProviderProps {
  children: React.ReactNode;
}

export const SpanishLanguageProvider: React.FC<SpanishLanguageProviderProps> = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState<boolean>(() => {
    const saved = localStorage.getItem('robolift-spanish-mode');
    if (saved) return JSON.parse(saved);
    
    // Auto-detect Spanish from browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es');
  });

  useEffect(() => {
    localStorage.setItem('robolift-spanish-mode', JSON.stringify(isSpanish));
    
    // Update HTML attributes
    document.documentElement.lang = isSpanish ? 'es' : 'en';
    document.documentElement.setAttribute('data-language', isSpanish ? 'es' : 'en');
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && isSpanish) {
      metaDescription.setAttribute('content', 
        'Únete a Robolift y construye el futuro a través de programas de robótica VEX, FTC, FRC y MATE ROV. Educación STEM práctica para estudiantes de todas las edades.'
      );
    }
    
    // Update page title
    if (isSpanish) {
      document.title = 'Robolift - Construyendo los Líderes STEM del Mañana';
    } else {
      document.title = 'Robolift - Building Tomorrow\'s STEM Leaders';
    }
  }, [isSpanish]);

  // Translation function with nested key support
  const t = (key: string, fallback?: string): string => {
    if (!isSpanish) return fallback || key;
    
    const keys = key.split('.');
    let value: any = spanishTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  // Spanish date formatting
  const formatDate = (date: Date): string => {
    if (isSpanish) {
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
    return date.toLocaleDateString('en-US');
  };

  // Spanish number formatting
  const formatNumber = (number: number): string => {
    if (isSpanish) {
      return number.toLocaleString('es-ES');
    }
    return number.toLocaleString('en-US');
  };

  // Spanish currency formatting
  const formatCurrency = (amount: number): string => {
    if (isSpanish) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const setSpanish = (spanish: boolean) => {
    setIsSpanish(spanish);
  };

  const value: SpanishLanguageContextType = {
    isSpanish,
    setSpanish,
    t,
    formatDate,
    formatNumber,
    formatCurrency
  };

  return (
    <SpanishLanguageContext.Provider value={value}>
      {children}
    </SpanishLanguageContext.Provider>
  );
};