import { useState } from 'react'

import * as S from './AppStyles'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <S.AppContainer>
      <S.AppHeader>
        <S.AppLogo src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <S.Button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </S.Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <S.AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </S.AppLink>
          {' | '}
          <S.AppLink
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </S.AppLink>
        </p>
      </S.AppHeader>
    </S.AppContainer>
  )
}

export default App
