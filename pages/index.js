import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'

import img from '../public/assets/sand2.jpg'
import Card from '../src/components/Card'

export const ContainerHome = styled.main`
display: flex;
justify-content: center;
padding-top: 25vh;
.clickTrigger {
  // transform: rotateY(360deg);
}
`
export const BgWrap = styled.main`
position: fixed;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: -1;
`
export default function Home() {


  return (
    <>
      <Head>
        <title>kévin Bosc</title>
      </Head>
      <>
        <BgWrap>
          <Image
            alt="image de fond bleu et rose"
            src={img}
            layout="fill"
            objectFit="cover"
            quality={100}
            // priority={true}
          />
        </BgWrap>
        <ContainerHome>
          <Card/>
        </ContainerHome>

      </>
    </>
  )
}

