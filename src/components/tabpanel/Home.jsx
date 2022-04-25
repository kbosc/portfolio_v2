import React from 'react'
import * as Style from "./home.style"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Style.homeContainer>
        <Style.homeTitle>
          Kévin Bosc
          <br />
          Développeur front-end
        </Style.homeTitle>
        <Style.homeLink>
          {' '}
          <Link href="https://github.com/kbosc">
            <a>Github</a>
          </Link>
          {' '}
          <Link href="https://www.linkedin.com/in/kevin-bosc-7b2395199/">
            <a>Linkedin</a>
          </Link>
          {' '}
          <Link href="mailto:kevin_bosc@hotmail.com">
            <a>Mail</a>
          </Link>
        </Style.homeLink>
      </Style.homeContainer>
    </>
  )
}
