import React from 'react'
import './POPOSSpace.css'

function POPOSSpace(props) {
    const { name, image, address, hours } = props
  return (
    <div className='card'>
      <img className='img' src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Public Space" />
      <h1 className='header' >{name}</h1>
      <div className='address' >{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default POPOSSpace