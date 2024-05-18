import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

let num = [1,2,3]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-10 rounded-md m-10 mb-px-20'>Vite with Tailwind</h1>
      <Card username="Kuzan" post="MD" myNum={num[0]} className='m-10'/>
      <Card username="Lulu" post="CTO" myNum={num[1]}  /> 
      <Card username="Xona" post="Staff" myNum={num[2]} />
    </>
  )
}

export default App
