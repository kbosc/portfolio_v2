import React from 'react'
import * as Style from "./card.style"
import Tabs from "./Tabs"
import { useMatchMedia } from "../hooks/useMatcMedia";
import img from '../../public/assets/pinkB.jpg'
// import img from '../../public/assets/turquoise.jpg'
import Image from 'next/image'

export default function Card() {
  const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
  return (
      <>
      <Style.centerCard>
        <Style.cardItem>
          <Style.bgWrap>
            <Image
              alt="image of paper"
              src={img}
              layout="fill"
              objectFit="cover"
              // width="100%"
              // height="100%"
              quality={100}
            />
          </Style.bgWrap>
            {isDesktopResolution ? (
                <Tabs/>
              ) : (
                <Style.smartphoneCard>
                faut swipe gros
                </Style.smartphoneCard>
            )}
        </Style.cardItem>
      </Style.centerCard>
      </>
  )
}
