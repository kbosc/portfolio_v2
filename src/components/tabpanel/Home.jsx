import React from 'react'
import * as Style from "./home.style"
import Link from 'next/link'
import { StyledLink } from "../../../styles/theme"

export default function Home() {
  const HomeLink = [
    {
      link: "https://github.com/kbosc",
      text: "Github",
    },
    {
      link: "https://www.linkedin.com/in/kevin-bosc-7b2395199/",
      text: "Linkedin",
    },
    {
      link: "mailto:kevin_bosc@hotmail.com",
      text: "Mail",
    },
  ]
  return (
    <>
      <Style.homeContainer>
        <Style.homeTitle>
          Kévin Bosc
          <br />
          Développeur front-end
        </Style.homeTitle>
        <div>
          {HomeLink.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <StyledLink target="_blank">{item.text}</StyledLink>
            </Link>
          ))
          }
        </div>
      </Style.homeContainer>
    </>
  )
}
