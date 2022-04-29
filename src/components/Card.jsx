import React from 'react'
import * as Style from "./card.style"
import Tabs from "./Tabs"
import { useMatchMedia } from "../hooks/useMatcMedia";
import img from '../../public/assets/pinkB.jpg'
// import img from '../../public/assets/turquoise.jpg'
import Image from 'next/image'
import RotateDevice from "./RotateDevice"

export default function Card() {
  const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
  return (
      <>
        <Style.cardItem>
          <Style.bgWrap>
            <Image
              alt="image de fond bleu et rose"
              src={img}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </Style.bgWrap>
            {isDesktopResolution ? (
                <Tabs/>
              ) : (      
                <RotateDevice/>
            )}
        </Style.cardItem>
      </>
  )
}
