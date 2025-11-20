import React from 'react'
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout