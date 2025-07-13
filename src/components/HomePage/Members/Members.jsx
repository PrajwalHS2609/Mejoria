import React from 'react'
import MembersHeading from './MembersHeading'
import "./Members.css"
import MembersSlide from './MembersSlide'
const Members = () => {
  return (
    <div className='membersMainContainer'>
      <MembersHeading/>
      <MembersSlide/>
    </div>
  )
}

export default Members
