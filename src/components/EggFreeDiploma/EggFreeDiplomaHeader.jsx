import React from 'react'
import "./EggFreeDiploma.css";
import eggFreeDiplomaBanner from "@/Image/Img/13.jpg"
import Image from 'next/image';
const EggFreeDiplomaHeader = () => {
  return (
    <div className="eggFreeHeader-container">
      <div className="eggFreeHeader-cover">
        <h2>EggFree Diploma Course</h2>
      </div>
      <Image
        src={eggFreeDiplomaBanner}
        alt="eggFree Diploma Banner"
      />
    </div>
  )
}

export default EggFreeDiplomaHeader
