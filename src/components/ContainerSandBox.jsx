import React from 'react'
import Link from 'next/link'
import Loader from './Loader'
import * as Style from "./containerSandBox.style"

export default function ContainerSandBox () {
  return (
    <>
        <Style.containerSandBox>
          <Link href={`/`} passHref>
            <Style.linkReturnNeutral>
              La page est en construction
              <br />
              Retour en zone neutre !
              <Loader/>
            </Style.linkReturnNeutral>     
          </Link>
        </Style.containerSandBox>
    </>
  )
}
