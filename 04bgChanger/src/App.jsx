
import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("olive")


  return (

    <div className=' w-full h-screen duration-200 flex justify-center items-center'
    style={{backgroundColor: color}}>

     <div className='fixed justify-center bottom-12 space-x-8'> 
      <button onClick={()=> setColor("red")} className='bg-white rounded-md  p-2 font-bold'>Red</button>
      <button onClick={()=> setColor("yellow")} className='bg-white rounded-md  p-2 font-bold'>Yellow</button>
      <button onClick={()=> setColor("blue")} className='bg-white rounded-md  p-2 font-bold'>Blue</button>
      <button onClick={()=> setColor("violet")} className='bg-white rounded-md  p-2 font-bold'>violet</button>
      <button onClick={()=> setColor("pink")} className='bg-white rounded-md  p-2 font-bold'>pink</button>

     </div>
    </div>  
  )

}

export default App
