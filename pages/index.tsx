import React from 'react'
import Head from 'next/head'
import { root } from 'styles/Home.css'
import Code from 'components/code'

export default function Home() {
  return (
    <div className={root}>
      <Head>
        <title>composer</title>
        <meta name="description" content="Design + engineering = ❤️" />
      </Head>

      <Code />
    </div>
  )
}
