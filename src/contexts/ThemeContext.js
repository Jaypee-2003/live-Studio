// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const darkTheme = {
    background: 'linear-gradient(to bottom, #1e1e1e, #121212)',
    text: 'white',
    buttonBackground: '#007bff',
    buttonHoverBackground: '#0056b3',
    cardBackground: 'rgba(255, 255, 255, 0.1)',
    cardText: 'white',
};

const lightTheme = {
    background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
    text: 'black',
    buttonBackground: '#007bff',
    buttonHoverBackground: '#0056b3',
    cardBackground: 'rgba(0, 0, 0, 0.1)',
    cardText: 'black',
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme);
    const [themeName, setThemeName] = useState('dark');

    const toggleTheme = () => {
        if (theme === darkTheme) {
            setTheme(lightTheme);
            setThemeName('light');
        } else {
            setTheme(darkTheme);
            setThemeName('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
