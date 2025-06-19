import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {


  let [counter, setCounter] = useState(10)

  let AddOne = () => {
    if (counter < 20) {

      setCounter(counter +1)
      // setCounter(counter + 1)   doesn't affect due to batching
      // setCounter((prev) => prev+1) 

    } else {
      alert('Maximum value reached')
    }
  }

  let RemoveOne = () => {
    if (counter > 0 ) {
      setCounter(counter - 1)
    } else {
      alert('Minimum value reached')
    }

  }

  return (
    <>

      <h1>Hello, Yash here! Lets experiment something..</h1>
      <div>
        <button onClick={AddOne}> increase it -> {counter} </button>
        <br></br><br></br>
        <button onClick={RemoveOne}> decrease it -> {counter} </button>
      </div>

    </>
  )
}

export default App
