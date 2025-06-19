import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'
import Chai from './Chai.jsx'

function NewComponent (){
    return (
        <h1>Lets check</h1>
    )
}
const name = "yash"
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target:'_blank'},
    'Click me to open Google',
      //default format in which React takes element
     name  // variable gets injected after full tree make up
  

)
 

createRoot(document.getElementById('root')).render(

    <>
        <App />
        <Chai />
        <NewComponent />
        {reactElement}

        {/* <h1>Yash here </h1> */}
    </>

)
