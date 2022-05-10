import { useMatchMedia } from "../hooks/useMatcMedia";
import img from '../../public/assets/pinkB.jpg'
import RotateDevice from "./RotateDevice"
import * as Style from "./card.style"
import Image from 'next/image'
import Tabs from "./Tabs"
import React from 'react'


export default function Card() {
  const isDesktopResolution = useMatchMedia('(min-width:650px)', true)
  // const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
  
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
