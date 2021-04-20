import React from 'react'
import Image from 'next/image';
// import Link from 'next/link';

const Card = (props) => {
  return (
    <div className="card-container">
      {
        props.left ?
          <div className="inner-card text-left">
            <div className="card-text">
              {props.children}
            </div>
            <Image src={props.src} width={900} height={600} layout='intrinsic' />
          </div>
          :
          <div className="inner-card text-right">
            <Image src={props.src} width={900} height={600} layout='intrinsic' />
            <div className="card-text">
              {props.children}
            </div>
          </div>
      }

    </div>
  )
}

export default Card
