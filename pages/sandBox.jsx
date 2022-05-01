import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import ContainerSandBox from '../src/components/ContainerSandBox'

export const BgWrap = styled.main`
position: fixed;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: -1;
background-color: black;
`

export default function sandBox() {
  return (
      <>
        <Head>
          <title>Sandbox kévin Bosc</title>
        </Head>
        <>
        <BgWrap/>
        <ContainerSandBox/>
        </>

      </>
  )
}
