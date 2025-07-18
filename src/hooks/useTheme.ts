import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('robolift-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      return savedTheme;
    }
    return 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [mounted, setMounted] = useState(false);

  // Get the actual theme being applied
  const actualTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Remove all theme classes
    document.documentElement.classList.remove('light', 'dark');
    
    // Add the actual theme class
    document.documentElement.classList.add(actualTheme);
    document.documentElement.setAttribute('data-theme', actualTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('robolift-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', actualTheme === 'dark' ? '#111827' : '#ffffff');
    }

    // Update meta color-scheme
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]') || 
                           document.createElement('meta');
    metaColorScheme.setAttribute('name', 'color-scheme');
    metaColorScheme.setAttribute('content', actualTheme === 'dark' ? 'dark' : 'light');
    if (!document.head.contains(metaColorScheme)) {
      document.head.appendChild(metaColorScheme);
    }

    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { theme: actualTheme, userPreference: theme } 
    }));

  }, [theme, actualTheme, mounted]);

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return { 
      theme: 'light' as Theme, 
      actualTheme: 'light' as 'light' | 'dark',
      systemTheme: 'light' as 'light' | 'dark',
      setTheme: () => {}, 
      toggleTheme: () => {},
      mounted: false
    };
  }

  return { 
    theme, 
    actualTheme,
    systemTheme,
    setTheme, 
    toggleTheme,
    mounted
  };
};