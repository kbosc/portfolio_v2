import React from 'react'
import * as Style from "./slideOne.style"
import hrnet from "../../assets/hrnet.png";
import Image from 'next/image'

export default function SlideOne() {
  return (
      <Style.containerSlide>
        <Style.containerDescription>
            SlideOne
        </Style.containerDescription>
        <Style.containerVisual>
            <Image 
                src={hrnet}
                alt="Picture of the projext hrnet"
            />
        </Style.containerVisual>  
      </Style.containerSlide>
  )
}
