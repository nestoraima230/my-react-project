import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextExample from './components/TextExample';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TextExample/>
    </>
  )
}

export default App
