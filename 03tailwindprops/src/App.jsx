import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    name: "uu"
  }
  let arr = [2,4,6]

  return (
    <>
      <h1> hey yash</h1>
      <Card name = "yash" myobject = {obj} arr = {arr} />
      <Card name = "vidisha" />
      <Card />

    </>
  )
}

export default App
