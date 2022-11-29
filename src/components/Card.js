import React from 'react'

const Card = (props) => {
  return (
    <div className='cardComponent'>
      <img className='cardImg' src={props.img} alt="images" />
      <div className='cardRating'>
        <img className='cardStar' src='images/star.png' alt="star" />
        <span>{props.rating}</span>
        <span className='grey'>({props.reviewCount}) • </span>
        <span className='grey'>{props.location}</span>
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