import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Homepage/>
      <div className="h-[1000px]"></div>
    </>
  )
}

export default App
