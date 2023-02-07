import React, { createContext, useEffect, useState } from "react"
import Layout from "./components/layout"
import "./App.css"
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom"
import { HomePage, NotFound, Create, Search, Shelf, LoginRegister, Prediction} from "./pages";
import Navbar from "./components/Navbar/Navbar"

import "./back.styl"

function App() {
  return (
    <>

    <div className='h-screen flex flex-col justify-between'>
    <Navbar />
	  <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LoginRegister />} />
              {/* <Route exact path="/home" element={<HomePage />} /> */}
              <Route exact path="/home" element={ <><Navbar displayNav={true} /> <HomePage /> </>} />
              <Route exact path="/prediction" element={ <><Navbar displayNav={true} /> <Prediction /> </>} />
              <Route exact path="/search" element={<> <Navbar displayNav={true} /> <Search /> </> } />
              <Route exact path="/shelf" element={<> <Navbar displayNav={true} /> <Shelf /> </> } />
              <Route exact path="/create" element={<> <Navbar displayNav={true} /> <Create /> </> } />
                <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>    
	  </div>
    </>
  )
}

export default App
