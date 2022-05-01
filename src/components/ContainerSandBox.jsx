import React from 'react'
import Loader from './Loader'
import Link from 'next/link'
import * as Style from "./containerSandBox.style"
import WordPositionRandom from './WordPositionRandom'

export default function ContainerSandBox () {
  return (
    <>
        <Style.containerSandBox>
          <Link href={`/`} passHref>
            <Style.linkReturnNeutral>
              Retour en zone neutre !
              <Loader/>
            </Style.linkReturnNeutral>
          
          </Link>
          {/* <WordPositionRandom/>     */}
        </Style.containerSandBox>
    </>
  )
}
