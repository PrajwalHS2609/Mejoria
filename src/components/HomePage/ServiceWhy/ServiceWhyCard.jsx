import React from 'react'
import "./ServiceWhy.css"
const ServiceWhyCard = (props) => {
  return (
    <div className='serviceWhyCardContainer'>
      <div className="serviceWhyCardContent1">
        <img src={props.img} alt="" />
      </div>
      <div className="serviceWhyCardContent2">
        <p>{props.para}</p>
      </div>
    </div>
  )
}

export default ServiceWhyCard
