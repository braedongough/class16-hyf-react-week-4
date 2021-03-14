import {useTheme} from './ThemeContext'
import Todos from './Todo'
import './App.css'

function App() {
  const themeContext = useTheme()
  console.log(themeContext)
  return (
    <div className='App'>
      <Todos />
    </div>
  )
}

export default App
