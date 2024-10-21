import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyAlert from './components/Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyAlert/>
    </>
  )
}

export default App
