import React from 'react'
import "./ServiceContent.css"
const ServiceContent = (props) => {
  return (
 <div className="serviceContent-Container" id="home">
      <div className="serviceContent-wrapper">
        <div className="serviceContent-content" id="vid-content1">
          <video className="" src="/videos/vid1.mp4" autoPlay loop muted />
        </div>
        <div className="serviceContent-content" id="vid-content1">
          <video className="" src="/videos/vid2.mp4" autoPlay loop muted />
        </div>
        <div className="serviceContent-content" id="vid-content2">
          <video className="" src="/videos/vid3.mp4" autoPlay loop muted />
        </div>
        <div className="serviceContent-content" id="vid-content1">
          <video className="" src="/videos/vid4.mp4" autoPlay loop muted />
        </div>
        <div className="serviceContentHeader-cover">
          <h2>
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ServiceContent
