import React from 'react'
import Image from 'next/image'
import * as Style from "./about.style"
import kbosc from "../../../public/assets/kbosc.jpg"
import { StyledLink, TitleH2 } from "../../../styles/theme"

export default function About() {
  return (
    <>
    <Style.containerAbout>
      <Style.containerDescription>
        <TitleH2>A propos de moi :</TitleH2>
        <p>
        Ancien agent de sécurité dans le privé, j&apos;ai décidé de me reconvertir en tant que développeur web.
        </p>
        <p>
        je me suis d&apos;abord lancé, par passion et en autodidacte. J&apos;ai ensuite validé mes compétences avec un diplôme  full stack, puis une spécialisation front end.
        </p>
        <p>
        J&apos;utilise principalement ReactJs, Redux toolkit,  Styled component dans mes projets mais j&apos;aime découvrir de nouvelles techno pour élargir les possibilités.
        </p>
        <StyledLink
          href="/assets/boscCV.pdf"
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
        />
      </Style.containerImage>
    </Style.containerAbout>
    </>
  )
}
