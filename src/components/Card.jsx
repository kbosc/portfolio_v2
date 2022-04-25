import React from 'react'
// import Head from 'next/head'
import * as Style from "./card.style"
import Tabs from "./Tabs"
import { useMatchMedia } from "../hooks/useMatcMedia";

export default function Card() {
  const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
  return (
      <>
      <Style.centerCard>
        {isDesktopResolution ? (
                <Style.cardItem>
                    {/* <Style.tabsCard> */}
                        <Tabs/>
                    {/* </Style.tabsCard> */}
        </Style.cardItem>

        ) : (
          <p>
            faut swipe gros
          </p>
        )}
      </Style.centerCard>
      </>
  )
}
