import React from 'react'

const Card = () => {
  return (
    <div className='cardComponent'>
        <img className='cardImg' src='../image 12.png'/>
        <div className='cardRating'>
            <img className='cardStar' src='../star.png'/>
            <span>5.0</span>
            <span className='grey'>(6) • </span>
            <span className='grey'>USA</span>
        </div>
        <p className='cardTitle'>
            Life lessons with Katie Zaferes
        </p>
        <p className='cardCostPerPerson'>
            <span className='bold'> From $136 </span> / person
        </p>
    </div>
  )
}

export default Card