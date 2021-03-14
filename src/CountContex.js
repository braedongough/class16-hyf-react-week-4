import {createContext, useState} from 'react'

export const CountContext = createContext()

const CountProvider = ({children}) => {
  const [count, setCount] = useState(0)

  const contextValue = {
    count,
    incrementCount: () => setCount(count + 1),
    decrementCount: () => setCount(count - 1),
  }

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  )
}

export default CountProvider
