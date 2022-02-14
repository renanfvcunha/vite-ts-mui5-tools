import { styled, keyframes } from '@mui/material'

export const AppContainer = styled('div')({
  textAlign: 'center',
})

export const AppHeader = styled('header')({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: '#fff',
})

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AppLogo = styled('img')({
  height: '40vmin',
  pointerEvents: 'none',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${AppLogoSpin} infinite 20s linear`,
  },
})

export const Button = styled('button')({
  fontSize: 'calc(10px + 2vmin)',
})

export const AppLink = styled('a')({
  color: '#61dafb',
})
