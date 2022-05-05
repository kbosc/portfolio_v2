import React from 'react'
import Image from 'next/image'
import * as Style from "./about.style"
import kbosc from "../../../public/assets/kbosc.jpg"
import { StyledLink } from "../../../styles/theme"

export default function About() {
  return (
    <>
    <Style.containerAbout>
      <Style.containerDescription>
        <h3>A propos de moi :</h3>
        <p>Anciennement agent de sécurité dans le privé, frustré du manque d&apos;évolution, 
            j&apos;ai décidé de me reconvertir en tant que développeur web. Passionné depuis 
            toujours par mon ordinateur (essentiellement des jeux vidéos ) je me suis 
            d&apos;abord mis à apprendre seul le HTML et CSS dans le but de créer à mon tour 
            un truc cool ! Par la suite j&apos;ai effectué des recherches afin d&apos;assouvir ma 
            soif de connaissances, ainsi j&apos;ai découvert  Le Wagon. Je suis maintenant 
            diplômé du batch 320, et plus motivé que jamais pour continuer d&apos;apprendre 
            de nouveaux langages ou perfectionner mes acquis actuels. Vous pouvez apprécier 
            mes différents travaux réalisés lors de ce bootcamp.
        </p>
        <StyledLink
          href="/boscCV.pdf"
          alt="Lien vers le CV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien vers mon CV
        </StyledLink>
      </Style.containerDescription>
      <Style.containerImage>
        <Image
        alt="Profil picture"
        src={kbosc}
        layout="responsive"
        objectFit="cover"
        // className="imageCarousel"
        />
      </Style.containerImage>
    </Style.containerAbout>
    </>
  )
}
