import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = React.createContext(['light', () => {}]);

export const ThemeProvider = (props) => {
  const [theme, settheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeContext.Provider value={[theme, settheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
