import React from 'react'

const Card = (props) => {
  let badgeText 
  if(props.el.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if(props.el.location === 'Online') {
    badgeText = "ONLINE"
  }
  return (
    <div className='cardComponent'>
      {badgeText && <div className='cardBadge'>{badgeText}</div>}
      <img className='cardImg' src={props.el.coverImg} alt="images" />
      <div className='cardRating'>
        <img className='cardStar' src='images/star.png' alt="star" />
        <span>{props.el.stats.rating}</span>
        <span className='grey'>({props.el.stats.reviewCount}) • </span>
        <span className='grey'>{props.el.location}</span>
      </div>
      <p className='cardTitle'>
        {props.el.title}
      </p>
      <p className='cardPrice'>
        <span className='bold'> From ${props.el.price} </span> / person
      </p>
    </div>
  )
}

export default Card