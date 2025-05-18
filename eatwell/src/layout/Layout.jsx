import React from 'react'
import Section1 from '../components/section/Section1'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
  <Section1/>
  <Outlet/>
 </>
  )
}

export default Layout