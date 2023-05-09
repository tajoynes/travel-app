import React, { useContext, useEffect } from 'react'
import { Main } from './screens/Main'
import { Featured } from './screens/Featured'
import { AppContext } from './context/AppContext'
import { AppBanner } from './components/AppBanner'

function App() {
  return (
    <main className='bg-app-background overflow-hidden h-full bg-cover bg-center bg-no-repeat px-24 py-10 relative'>
      <AppBanner />
      <Main />
      <Featured />
    </main>
  )
}

export default App
