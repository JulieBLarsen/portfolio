import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = React.createContext(['', () => {}]);

export const ThemeProvider = (props) => {
  const [theme, settheme] = useLocalStorage('theme', '');

  return (
    <ThemeContext.Provider value={[theme, settheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
