import React from 'react'
import * as Style from "./slideOne.style"
import hrnet from "../../../public/assets/hrnetUndraw.svg";
import github from "../../../public/assets/iconeGithub.svg";
// import hrnet from "../../assets/hrnet.png";
import Image from 'next/image'
import Link from 'next/link'

export default function SlideOne() {
  return (
      <Style.containerSlide>
        <Style.containerDescription>
          <div>
            HRnet est un project lié à la formation OpenCLassRooms, 
            celui ci consisté à passer une application initialement coder en Jquery vers la librairie React.
            <br/>
            A travers cette expérience j'ai pu entre autre expérimenter :
            <ul>
              <li>le state management avec redux-toolkit</li>
              <li>la librairie de Material-UI</li>
              <li>déployer une librairie sur npmjs</li>
            </ul> 
          </div>
          <br />
          <Link href="https://github.com/kbosc" >
            <a target="_blank" className="alignLink">
              <Image 
                  alt="Picture of the project hrnet"
                  src={github}
                  // layout="responsive"
                  // layout="intrinsic"
                  // layout="fill"
                  width={30}
                  height={30}
                  objectFit="cover"
                  className="imageGithub"
              />
              <p>
              Plus de détails
              </p> 
            </a>
          </Link>
          
        </Style.containerDescription>
        <Style.containerImage>
            <Image 
                alt="Picture of the project hrnet"
                src={hrnet}
                // layout="responsive"
                // layout="intrinsic"
                // layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                className="imageCarousel"
            />
        </Style.containerImage>  
      </Style.containerSlide>
  )
}
