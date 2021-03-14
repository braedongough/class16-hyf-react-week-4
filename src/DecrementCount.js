import {useContext} from 'react'
import {CountContext} from './CountContex'

function DecrementCount() {
  const countContext = useContext(CountContext)
  return <button onClick={countContext.decrementCount}>Decrement</button>
}

export default DecrementCount
