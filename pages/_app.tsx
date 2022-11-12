import React from 'react'
import dynamic from 'next/dynamic'
import 'styles/globals.css'
import type { AppProps } from 'next/app'

const Wrapper = (props: { children: React.ReactNode }) => (
  <React.Fragment>{props.children}</React.Fragment>
)

const NonSSRWrapper = dynamic(() => Promise.resolve(Wrapper), {
  ssr: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NonSSRWrapper>
      <Component {...pageProps} />
    </NonSSRWrapper>
  )
}
