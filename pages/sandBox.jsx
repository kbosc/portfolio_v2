import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Loader from '../src/components/Loader'
import styled from 'styled-components'

export const BgWrap = styled.main`
position: fixed;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: -1;
background-color: black;
`
export const ContainerSandBox = styled.main`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 25vh;
color: white;
gap: 1rem;
`

export default function sandBox() {
  return (
      <>
        <Head>
          <title>Sandbox kévin Bosc</title>
        </Head>
        <>
        <BgWrap/>
        <ContainerSandBox>
          <Link href={`/`}>Go to molduZone</Link>
          <Loader/>
        </ContainerSandBox>
        </>

      </>
  )
}
