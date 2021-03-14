import {useContext} from 'react'
import {CountContext} from './CountContex'

export function IncrementCount() {
  const countContext = useContext(CountContext)
  return <button onClick={countContext.incrementCount}>Increment</button>
}
