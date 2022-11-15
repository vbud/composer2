import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: 500,
})

export const paneTitle = style({
  background: '#444',
  fontSize: 12,
  padding: '4px',
})

export const codeEditor = style({
  background: '#222',
  flexGrow: 1,
})
