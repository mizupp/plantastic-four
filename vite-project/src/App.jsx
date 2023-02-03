import React, { createContext, useEffect, useState } from "react"
import Layout from "./components/layout"
import "./App.css"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import { HomePage, NotFound, SettingsPage } from "./pages"
import { Create, Search, Shelf, LoginRegister, Settings } from "./pages";

import "./back.styl"

function App() {
  return (
    <>

    <div className='h-screen flex flex-col justify-between'>
	  <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginRegister />} />
            <Route path="home" element={<HomePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shelf" element={<Shelf />} />
            <Route path="/create" element={<Create />} />
			<Route path="*" element={<NotFound />} />
        </Route>
      </Routes>    
   
	{/* <Routes>
        <Route exact path="/shelf" element={<Shelf />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/login" element={<LoginRegister />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/settings" element={<Settings />} />
		<Route path="*" element={<NotFound />} />
      </Routes> */}
	  </div>
    </>
  )
}

export default App
