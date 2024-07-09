import { createContext, ReactNode, useContext, useState } from 'react';

interface IThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('context error!');
    }
    return context;
};

interface IthemePrivider {
    children: ReactNode;
}
export const ThemePrivider = ({ children }: IthemePrivider) => {
    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        setIsDark((prev) => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
