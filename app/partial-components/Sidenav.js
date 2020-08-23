// import React, { useContext } from 'react'
import React from 'react'
// import { AppContext } from '../context/AppContext'
import './Sidenav.scss'

import { useRecoilValue } from 'recoil'
import { navOpenRecoil } from '../context/AppAtoms'

import Menu from './Menu'

const Sidenav = () => {
  // const context = useContext(AppContext)
  const navOpen = useRecoilValue(navOpenRecoil)
  return (
    <div className={`sidenav ${navOpen ? 'show' : 'hide'}`}>
      <Menu />
    </div>
  )
}

export default Sidenav