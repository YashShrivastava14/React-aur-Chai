import { useEffect, useState } from 'react';
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from '../components/ThemeBtn';
import Card from '../components/Card';

function App() {

  const[theme,setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev)=> prev === "light" ? "dark" : "light" )
  }

useEffect(() => {
  document.querySelector('html').classList.remove('light','dark');
  document.querySelector('html').classList.add(theme)

},[theme])

  

  return (

    <ThemeContextProvider value={{theme,toggleTheme}} >
      <div class="dark:bg-red-600 bg-green-300">TEST BLOCK</div>
    
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeContextProvider>

  ) 
}

export default App
