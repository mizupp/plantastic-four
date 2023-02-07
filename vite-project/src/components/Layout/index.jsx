import React from 'react'
// import Header from '../header'
// import Footer from '../footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            
                <main className='h-full w-full flex flex-col justify-evenly'><Outlet /></main>
         
        </>
    )
}

export default Layout
