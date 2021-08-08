import React, { useContext, createContext } from "react";

const themes = {
    default: {
        foregroundColor: '#00000',
        backgroundColor: '#d7dbd7',
    },
    red: {
        foregroundColor: '#000000',
        backgroundColor: '#f24165'
    },
    blue: {
        foregroundColor: '#000000',
        backgroundColor: '#31a5f7'
    },
    green: {
        foregroundColor: '#000000',
        backgroundColor: '#1ede09',
    }
}

// Create the context
const ThemeContext = createContext(themes.default);
const ThemeProvider = ThemeContext.Provider;


function useTheme() {
    const theme = useContext(ThemeContext);

    return theme;
}


export { themes, useTheme };

export default ThemeProvider;