import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
      {/* <div className="h-[1000px]">app.jsx</div> */}
    </>
  )
}

export default App
