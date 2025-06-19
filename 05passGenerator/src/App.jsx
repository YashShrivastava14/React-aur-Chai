import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*(){}[]=-+"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * (str.length - 1))

      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  //can run the passGenerator function using useEffect hook also 
  useEffect(()=>{
      passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])


const passwordReference = useRef(null)

const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)   //sufficient for copying password
    passwordReference.current.select()   // extra functionality for convenience
    
}, [password]) 

  return (
    <>
      <div className='w-full max-w-md mx-auto py-4 px-4  rounded-lg shadow-lg bg-gray-600 space-y-4 mt-4'>
        <h1 className='text-center ' >Password Generator</h1>
        <div className='flex '>
          <input className='text-black bg-white w-full p-4 text-2xl'
            type='text'
            placeholder='password'
            readOnly
            value={password}
            ref={passwordReference}
          >
          </input>
          <button className='bg-blue-700 p-4  active:scale-95 transition-transform duration-100 cursor-pointer hover:bg-blue-800' onClick={passwordGenerator}>
            Generate
          </button>
          <button className='bg-green-700 p-4  active:scale-95 transition-transform duration-100 cursor-pointer hover:bg-green-800'
          onClick={copyPassword} >
            Copy
          </button>
          
        </div>

        <div className='flex justify-center items-center space-x-2'>
          <input
            type='range'
            min={6}
            max={16}
            value={length}
            onChange={(e) => { setLength(e.target.value) }} >
          </input>
          <label className='text-orange-300'>Length : {length}</label>
          <input
            type='checkbox'
            defaultChecked = {numAllowed}
            onChange={(e) => { setnumAllowed(e.target.checked) }}
             >
          </input>
          <label>Numbers</label>
          <input
            type='checkbox'
             defaultChecked = {charAllowed}
             onChange={()=>{
              setCharAllowed(!charAllowed) 
             } }
             
             >
          </input>
          <label>Characters</label>
        </div>

      </div>


    </>
  )
}

export default App
