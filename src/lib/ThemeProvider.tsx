// src/lib/ThemeProvider.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

export const ThemeColors = [
  // 'light-grey',
  // 'red',
  // 'crimson',
  // 'orange',
  'amber',
  // 'yellow',
  'lime',
  // 'green',
  // 'emerald',
  'teal',
  // 'cyan',
  // 'sky',
  // 'blue',
  'indigo',
  // 'violet',
  // 'purple',
  'fuchsia',
  // 'pink',
  // 'rose',
  'slate',
] as const;

export type ThemeColor = (typeof ThemeColors)[number];

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
  children: ReactNode;
  defaultThemeColor?: ThemeColor;
  defaultThemeMode?: ThemeMode;
  keyThemeColor?: string;
  keyThemeMode?: string;
};

interface ThemeContextType {
  themeColor: ThemeColor;
  themeMode: ThemeMode;
  setThemeColor: (colorTheme: ThemeColor) => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const initialState: ThemeContextType = {
  themeColor: ThemeColors[0],
  themeMode: 'system',
  setThemeColor: () => null,
  setThemeMode: () => null,
};

const ThemeContext = createContext<ThemeContextType>(initialState);

const keyThemeColor = 'vite-ui-theme-color';
const keyThemeMode = 'vite-ui-theme-mode';

export function ThemeProvider({
  children,
  defaultThemeColor = ThemeColors[0],
  defaultThemeMode = 'system',
  ...props
}: ThemeProviderProps) {
  const [themeColor, setThemeColor] = useState<ThemeColor>(
    () =>
      (localStorage.getItem(keyThemeColor) as ThemeColor) || defaultThemeColor,
  );
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    () => (localStorage.getItem(keyThemeMode) as ThemeMode) || defaultThemeMode,
  );
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (themeMode === 'system') {
        setIsDark(mediaQuery.matches);
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  useEffect(() => {
    const isLight = themeMode === 'light';
    const isDark = themeMode === 'dark';

    if (!isLight && !isDark) {
      return;
    }

    setTimeout(() => setIsDark(isDark), 500);
    // 'system' handled in the media query effect
  }, [themeMode]);

  useEffect(() => {
    const root = document.documentElement;
    // Remove previous color theme classes
    ThemeColors.forEach((t) => root.classList.remove(`theme-${t}`));
    root.classList.add(`theme-${themeColor}`);

    console.log(`theme-${themeColor}`);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(keyThemeColor, themeColor);
  }, [themeColor, themeMode, isDark]);

  const value = {
    themeColor,
    themeMode,
    setThemeColor: (color: ThemeColor) => {
      localStorage.setItem(keyThemeColor, color);
      setThemeColor(color);
    },
    setThemeMode: (mode: ThemeMode) => {
      localStorage.setItem(keyThemeMode, mode);
      setThemeMode(mode);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
