import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Landing/landing.module.css'

const Landing = () => {
  return (
    <div className={style.background}>
      <button className={style.homeBtn}>
        <Link className={style.link} to={'/home'}>Home</Link>
      </button>
      
    </div>
  )
}

export default Landing