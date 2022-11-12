import React from 'react'
import Editor from '@monaco-editor/react'

import { root, paneTitle, codeEditor } from 'styles/Code.css'

export default function Code() {
  return (
    <div className={root}>
      <div className={paneTitle}>Code</div>
      <div className={codeEditor}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="// some comment"
          options={{ minimap: { enabled: false } }}
          // TODO: debounce
          onChange={(code) => console.log(code)}
        />
      </div>
    </div>
  )
}
