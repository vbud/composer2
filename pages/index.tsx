import React, { useState } from 'react'
import Head from 'next/head'
import * as babel from '@babel/standalone'

import { root } from 'styles/Home.css'
import Code from 'components/code'
import Canvas from 'components/canvas'
import debounce from 'utils/debounce'

const debounceWait = 500

function transformCode(code: string) {
  return babel
    .transform(code, { presets: ['env', 'react'] })
    .code.replace('"use strict";', '')
    .trim()
}

export default function Home() {
  const [renderCode, setRenderCode] = useState<string>('')
  const [dataCode, setDataCode] = useState<string>('')

  const onChangeRenderCode = debounce((code: string) => {
    try {
      setRenderCode(transformCode(code))
    } catch {}
  }, debounceWait)

  const onChangeDataCode = debounce((code: string) => {
    try {
      setDataCode(transformCode(code))
    } catch {}
  }, debounceWait)

  return (
    <div className={root}>
      <Head>
        <title>composer</title>
        <meta name="description" content="Design + engineering = ❤️" />
      </Head>

      <Code title="Render" onChange={onChangeRenderCode} />
      <Code title="Data" onChange={onChangeDataCode} />
      <Canvas dataCode={dataCode} renderCode={renderCode} />
    </div>
  )
}
