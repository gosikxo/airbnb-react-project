import React from 'react'

const Card = (props) => {
  return (
    <div className='cardComponent'>
      <img className='cardImg' src={props.img} alt="zaferes" />
      <div className='cardRating'>
        <img className='cardStar' src='../star.png' alt="star" />
        <span>{props.rating}</span>
        <span className='grey'>({props.reviewCount}) • </span>
        <span className='grey'>{props.country}</span>
      </div>
      <p className='cardTitle'>
        {props.title}
      </p>
      <p className='cardCostPerPerson'>
        <span className='bold'> From ${props.price} </span> / person
      </p>
    </div>
  )
}

export default Card