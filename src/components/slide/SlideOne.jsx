import React from 'react'
import * as Style from "./slideOne.style"
// import hrnet from "../../../public/assets/hrnetUndraw.svg";
import github from "../../../public/assets/iconeGithub.svg";
// import hrnet from "../../assets/hrnet.png";
import Image from 'next/image'
import Link from 'next/link'

export default function SlideOne({sayHello, githubLink, projectImage, projectAlt}) {
  return (
      <Style.containerSlide>
        <Style.containerDescription>
          <div>
          {sayHello}
          </div>
          <br />
          <Link href={githubLink} >
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
                alt={projectAlt}
                src={projectImage}
                // layout="responsive"
                // layout="intrinsic"
                // layout="fill"
                width={200}
                height={200}
                objectFit="cover"
            />
        </Style.containerImage>  
      </Style.containerSlide>
  )
}
