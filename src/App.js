// import Todos from './Todo'
import Count from './Count'
import {IncrementCount} from './IncrementCount'
import DecrementCount from './DecrementCount'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Count />
      <IncrementCount />
      <DecrementCount />
    </div>
  )
}

export default App
