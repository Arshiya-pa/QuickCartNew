import { createContext, useState } from "react";

export const ThemeContext = createContext()

//Context: where we declared state and functions
export const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState("light")

    console.log("Theme in Context==",theme)

    const toggleTheme = () => {
        setTheme((prev)=>(prev == 'light'?'dark':'light'))
    }

    const Value = { theme, toggleTheme}

    //Declare provider which will pass state and functions in to componenets
    return(
        <ThemeContext.Provider value={Value}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}

//ThemeContext.Provider: It Makes the theme and setTheme available to all components inside it.
//{children}: Represents the components wrapped inside the provider.
//value={{ theme, setTheme }}:The shared data (context value).