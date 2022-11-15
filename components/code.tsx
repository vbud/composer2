import React from 'react'
import Editor from './editor'

import { root, paneTitle, codeEditor } from 'styles/Code.css'

export default function Code({
  onChange,
  title,
}: {
  onChange: (code: string) => void
  title: string
}) {
  return (
    <div className={root}>
      <div className={paneTitle}>{title}</div>
      <div className={codeEditor}>
        <Editor onChange={onChange} />
      </div>
    </div>
  )
}
