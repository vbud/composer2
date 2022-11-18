import React from 'react'
import MonacoEditor from '@monaco-editor/react'

export default function Editor({
  defaultValue,
  onChange,
}: {
  defaultValue?: string
  onChange: (code: string) => void
}) {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage="javascript"
      theme="vs-dark"
      options={{ minimap: { enabled: false } }}
      onChange={(code) =>
        typeof code === 'string' ? onChange(code) : onChange('')
      }
      defaultValue={defaultValue}
    />
  )
}
