import React from 'react'
import "./index.css"
const index = () => {
  return (
    
    <div className='reserve-card'>
        <div className='time'><p>13:44</p><p>15:00</p></div>
        <div className='ville'><p>Marrakech</p><p>Agadir</p></div>
        <div className='totalhours'><p>2h</p></div>
        <div className='price'><p>100$</p></div>
        <div className='reserver'><button className='btn'>Reserver</button></div>
      
    </div>
  )
}

export default index
