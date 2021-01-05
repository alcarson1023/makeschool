// import React from 'react'
import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
  return (
      <Link to={`/details/${id}`}>
    <div className='card'>
      <img className='img' src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Public Space" />
      <h1 className='header' >{name}</h1>
      <div className='address' >{address}</div>
      <div className='hours'>{hours}</div>
    </div>
    </Link>
  )
}

export default POPOSSpace