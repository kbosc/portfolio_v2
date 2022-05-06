import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Style from "./slideOne.style"
import { StyledLink, TitleH3 } from "../../styles/theme"

export default function SlideOne({sayHello, githubLink, projectImage, projectAlt, projectUrl, projectTechno}) {
  const list = sayHello.map((item, index) => (
    <Style.listSlide key={index}>{item}</Style.listSlide>
  ))
  return (
      <Style.containerSlide>
        <Style.containerDescription>
          <Style.sectionDescription>
            <TitleH3>Compétences déployées</TitleH3>
            <ul>
              {list}
            </ul>
          </Style.sectionDescription>
          <Style.sectionDescription>
            <TitleH3>Technos utilisées</TitleH3>
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
              {githubLink ? "Github" : "live demo"}
            </StyledLink>
          </Link> 
      </Style.containerSlide>
  )
}
