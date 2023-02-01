import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContent } from "./ThemeContext";

interface UseThemResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemResult {
  const { theme, setTheme } = useContext(ThemeContent);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
