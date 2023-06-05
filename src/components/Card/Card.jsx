import React from 'react'
import style from '../Card/card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {name, continent, image, id} = props
  
  const flags = image.replace(/[{}]/g, '')
  const flagsArray = flags.split(',')

  return (
    <Link to={`/details/${id}`} className={style.card}>
    <div >
      <h1>{name}</h1>
      <img src={flagsArray[0]} alt={name} height={'80px'} width={'140px'} />
      <h2>{continent}</h2>
    </div>
    </Link>
  )
}

export default Card