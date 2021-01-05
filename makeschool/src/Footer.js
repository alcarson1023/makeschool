// import React from 'react'
import './Footer.css'

const timeElapsed = Date.now();
const today = new Date(timeElapsed);


function Footer() {
  return (
    <div className='wrapper'>
      {/* <h1 className='footer'>THIS IS A FOOTER!</h1> */}
  <p>Current date: {today.toDateString()}</p>
    </div>
  )
}

export default Footer