import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage on initial load
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme;
      return stored || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update document attribute for CSS
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update body styles
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#1a1f2e';
      document.body.style.color = '#e6edf3';
    } else {
      document.body.style.backgroundColor = '#f9fafb';
      document.body.style.color = '#111827';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
