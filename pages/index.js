import React from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import Card from '../src/components/Card'

export default function Home() {


  return (
    <>
      <Head>
        <title>Portfolio kévin Bosc</title>
      </Head>
      {/* <Link href={`/sandBox`}>Go to SANDBOX</Link> */}
      <Card/>
    </>
  )
}
