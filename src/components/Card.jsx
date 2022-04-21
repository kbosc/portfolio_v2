import React from 'react'
// import Head from 'next/head'
import * as Style from "./card.style"
import Tabs from "./Tabs"

export default function Card() {
  return (
      
      <>
      <Style.centerCard>
        <Style.cardItem>
            {/* <Style.tabsCard> */}
                <Tabs/>
            {/* </Style.tabsCard> */}
        </Style.cardItem>
      </Style.centerCard>
      </>
  )
}
