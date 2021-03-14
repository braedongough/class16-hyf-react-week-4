import {createContext, useState, useEffect} from 'react'

const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(window.navigator.language)

  useEffect(() => {
    // some api call
    setLanguage('spanish')
  }, [])

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
