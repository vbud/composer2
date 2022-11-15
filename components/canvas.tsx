import React from 'react'

import { root } from 'styles/Canvas.css'
import ErrorBoundary from 'utils/errorBoundary'

export default function Canvas({
  dataCode,
  renderCode,
}: {
  dataCode: string
  renderCode: string
}) {
  const func = new Function(
    'React',
    `return function CanvasContents() {
  ${dataCode}
  return ${renderCode}
}`
  )
  const CanvasContents = func(React)
  return (
    <div className={root}>
      <ErrorBoundary>
        <CanvasContents />
      </ErrorBoundary>
    </div>
  )
}
