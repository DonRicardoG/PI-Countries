import React from 'react'
import logo from '../../photos/logo.png'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo} alt="webpage logo" height='70px' weight='70px' />
        </div>
        <div className={style.btnsDisplay}>
          <Link to='/home'>
            <button className={style.btns}>Home</button> 
          </Link>
          <Link to='/create'>
            <button className={style.btns}>Create</button>
          </Link>
        </div>
    </div>
  )
}

export default NavBar