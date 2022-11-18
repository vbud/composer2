import React, { useState } from 'react'
import Head from 'next/head'
import * as babel from '@babel/standalone'

import { root } from 'styles/Home.css'
import Code from 'components/code'
import Canvas from 'components/canvas'
import debounce from 'utils/debounce'

const LOCAL_STORAGE_RENDER_CODE = 'code_render'
const LOCAL_STORAGE_DATA_CODE = 'code_data'

const debounceWait = 500

function transformCode(code: string) {
  return babel
    .transform(code, { presets: ['env', 'react'] })
    .code.replace('"use strict";', '')
    .trim()
}

export default function Home() {
  const [renderCode, setRenderCode] = useState<string>(() => {
    const localStorageRenderCode =
      localStorage.getItem(LOCAL_STORAGE_RENDER_CODE) ?? ''
    let initialRenderCode = ''
    if (localStorageRenderCode.length > 0) {
      try {
        initialRenderCode = transformCode(localStorageRenderCode)
      } catch {}
    }
    return initialRenderCode
  })
  const [dataCode, setDataCode] = useState<string>(() => {
    const localStorageDataCode =
      localStorage.getItem(LOCAL_STORAGE_DATA_CODE) ?? ''
    let initialDataCode = ''
    if (localStorageDataCode.length > 0) {
      try {
        initialDataCode = transformCode(localStorageDataCode)
      } catch {}
    }
    return initialDataCode
  })

  const onChangeRenderCode = debounce((code: string) => {
    try {
      const transformed = transformCode(code)
      setRenderCode(transformed)
      localStorage.setItem(LOCAL_STORAGE_RENDER_CODE, code)
    } catch {}
  }, debounceWait)

  const onChangeDataCode = debounce((code: string) => {
    try {
      const transformed = transformCode(code)
      setDataCode(transformed)
      localStorage.setItem(LOCAL_STORAGE_DATA_CODE, code)
    } catch {}
  }, debounceWait)

  return (
    <div className={root}>
      <Head>
        <title>composer</title>
        <meta name="description" content="Design + engineering = ❤️" />
      </Head>

      <Code
        title="Render"
        defaultValue={localStorage.getItem(LOCAL_STORAGE_RENDER_CODE) ?? ''}
        onChange={onChangeRenderCode}
      />
      <Code
        title="Data"
        defaultValue={localStorage.getItem(LOCAL_STORAGE_DATA_CODE) ?? ''}
        onChange={onChangeDataCode}
      />
      <Canvas dataCode={dataCode} renderCode={renderCode} />
    </div>
  )
}
