import React from 'react'
import Image from 'next/image';
// import Link from 'next/link';

const Card = (props) => {
  return (
    <div className="card-container" id={props.id}>
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
              {/* <div className="bottom">
                <a href={props.href} target="_blank" rel="noopener noreferrer">{props.atext}</a>
              </div> */}
          </div>
      }

    </div>
  )
}

export default Card
