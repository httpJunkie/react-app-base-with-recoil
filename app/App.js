import React from 'react'
import { RecoilRoot } from 'recoil'

import 'normalize.css'
import '@progress/kendo-theme-material/dist/all.css'
import './App.scss'

// import { AppProvider } from './context/AppContext'
import Frame from './Frame'

const App = () => {

  return(
    <RecoilRoot>
      <Frame />
    </RecoilRoot>
  )
}

export default App