import React from 'react'
import * as Style from "./slideOne.style"
// import github from "../../public/assets/iconeGithub.svg";
import Image from 'next/image'
import Link from 'next/link'
import { StyledLink } from "../../styles/theme"

export default function SlideOne({sayHello, githubLink, projectImage, projectAlt, projectUrl, projectTechno}) {
  const list = sayHello.map((item, index) => (
    <Style.listSlide key={index}>{item}</Style.listSlide>
  ))
  return (
      <Style.containerSlide>
        <Style.containerDescription>
          <Style.sectionDescription>
            <Style.slideTitle>Compétences déployées</Style.slideTitle>
            <ul>
              {list}
            </ul>
          </Style.sectionDescription>
          <Style.sectionDescription>
            <Style.slideTitle>Technos utilisées</Style.slideTitle>
            <p>{projectTechno}</p>       
          </Style.sectionDescription>
        </Style.containerDescription>
        <Style.containerImage>
            <Image 
                alt={projectAlt}
                src={projectImage}
                width={200}
                height={200}
                objectFit="contain"
            />
        </Style.containerImage> 

        <Link href={githubLink ? githubLink : projectUrl} passHref>
            <StyledLink target="_blank" className="alignLink">
              {/* <Image 
                  alt="Picture of the project hrnet"
                  src={github}
                  // layout="responsive"
                  // layout="intrinsic"
                  // layout="fill"
                  width={30}
                  height={30}
                  objectFit="cover"
                  className="imageGithub"
              /> */}
              {githubLink ? "Github" : "live demo"}
            </StyledLink>
          </Link> 
      </Style.containerSlide>
  )
}
