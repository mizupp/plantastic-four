import React, { createContext, useEffect, useState } from "react"
import Layout from "./components/layout"
import "./App.css"
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom"
import { HomePage, NotFound, SettingsPage } from "./pages"
import { Create, Search, Shelf, LoginRegister, Settings } from "./pages";
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
            <Route path="home" element={<HomePage />} />
            <Route path="settings" element={ <><Navbar displayNav={true} /> <SettingsPage /> </>} />
            <Route path="/search" element={<> <Navbar displayNav={true} /> <Search /> </> } />
            <Route path="/shelf" element={<> <Navbar displayNav={true} /> <Shelf /> </> } />
            <Route path="/create" element={<> <Navbar displayNav={true} /> <Create /> </> } />
			      <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>    
	  </div>
    </>
  )
}

export default App
