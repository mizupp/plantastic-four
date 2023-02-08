import React, { createContext, useEffect, useState } from "react"
import Layout from "./components/layout"
import "./App.css"
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { HomePage, NotFound, Create, Search, Shelf, LoginRegister, HealthPrediction, Settings} from "./pages";
import Navbar from "./components/Navbar/Navbar"
 import "./back.styl"

function App() {
  return (
    <>

    <div className='h-screen w-screen flex flex-col'>
	  <Routes>
          {/* <Route path='/' element={<Layout />}> */}
              <Route  path="/" element={ <LoginRegister />} />
              {/* <Route exact path="/home" element={<HomePage />} /> */}
              <Route exact path="/home" element={ <><Navbar displayNav={true} /> <HomePage /> <Footer /> </>} />
              <Route exact path="/prediction" element={ <><Navbar displayNav={true} /> <HealthPrediction /> <Footer /></>} />
              <Route exact path="/search" element={<> <Navbar displayNav={true} /> <Search /> <Footer /></> } />
              <Route exact path="/shelf" element={<> <Navbar displayNav={true} /> <Shelf /> <Footer /></> } />
              <Route exact path="/create" element={<> <Navbar displayNav={true} /> <Create /> <Footer /></> } />
              <Route exact path="/settings" element={<> <Navbar displayNav={true} /> <Settings/> <Footer /></> } />
              <Route path="*" element={<NotFound />} />
        {/* </Route> */}
      </Routes>    
	  </div>
    </>
  )
}

export default App
