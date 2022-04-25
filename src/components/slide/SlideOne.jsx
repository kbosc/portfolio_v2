import React from 'react'
import * as Style from "./slideOne.style"
import hrnet from "../../../public/hrnet.png";
// import hrnet from "../../assets/hrnet.png";
import Image from 'next/image'

export default function SlideOne() {
  return (
      <Style.containerSlide>
        <Style.containerDescription>
            HRnet est un project lié à la formation OpenCLassRooms, 
            celui ci consisté à passer une application initialement coder en Jquery vers la librairie React.
            <br/>
            A travers cette expérience j'ai pu entre autre expérimenter :
            <ul>
              <li>le state management avec redux-toolkit</li>
              <li>la librairie de Material-UI</li>
              <li>déployer une librairie sur npmjs</li>
            </ul> 
        </Style.containerDescription>
        <Style.containerImage>
            <Image 
                alt="Picture of the project hrnet"
                src={hrnet}
                layout="responsive"
                // layout="intrinsic"
                // layout="fill"
                width="100%"
                height="100%"
                objectFit="contain"
                className="imageCarousel"
            />
        </Style.containerImage>  
      </Style.containerSlide>
  )
}
