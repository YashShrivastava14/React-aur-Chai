import { createContext, useContext } from 'react';

// const themeContext = createContext()   <-- this is sufficient but...
// we can also add default values to the context :-

export const ThemeContext = createContext({
    theme : "light", // default theme
    toggleTheme : ()=>{}  
})


export const ThemeContextProvider = ThemeContext.Provider;


// creating hook for avoiding importing useContext and themeContext in every component
export default function useTheme(){
    return useContext(ThemeContext)
}

