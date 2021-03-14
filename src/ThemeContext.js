import {createContext, useState, useContext} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark')

  const contextValue = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const themeContext = useContext(ThemeContext)

  return themeContext
}

export default ThemeProvider
