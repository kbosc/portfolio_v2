import React from 'react'
import styled from 'styled-components'
import Link from "next/link"

export const tabContainer = styled.div`

`

export default function Custom404() {
  return (
    <>
      <p>
        ceci est la 404, vous êtes perdu.
      </p>
      <Link href={`/`} passHref>     
        <a>Retournez sur le portfolio</a>
      </Link>
    </>
  )
}

