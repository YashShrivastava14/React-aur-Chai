import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'  //for creating and using router

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import { Outlet } from 'react-router-dom'  // for rendering components dynamically 

// for attaching header,footer with the page :-
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}



// const router = createBrowserRouter([    //creating router
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Alternative Method for creating router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout />} >
      <Route path='about' element = {<About />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='user/:id' element = {<User />} />
      <Route path='github' element = {<Github />} />


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>

    </RouterProvider>

  </StrictMode>,
)
