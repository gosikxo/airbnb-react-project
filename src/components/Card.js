import React from 'react'

const Card = (props) => {
  let badgeText 
  if(props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if(props.location === 'Online') {
    badgeText = "ONLINE"
  }
  return (
    <div className='cardComponent'>
      {badgeText && <div className='cardBadge'>{badgeText}</div>}
      <img className='cardImg' src={props.coverImg} alt="images" />
      <div className='cardRating'>
        <img className='cardStar' src='images/star.png' alt="star" />
        <span>{props.stats.rating}</span>
        <span className='grey'>({props.stats.reviewCount}) • </span>
        <span className='grey'>{props.location}</span>
      </div>
      <p className='cardTitle'>
        {props.title}
      </p>
      <p className='cardPrice'>
        <span className='bold'> From ${props.price} </span> / person
      </p>
    </div>
  )
}

export default Card