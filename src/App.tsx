import React from 'react'
import './Assets/css/commom.scss'
import './Assets/css/v1.scss'
import './Assets/css/libraries.scss'

import history from './Config/history'

//@ts-ignore
import { ScrollIndexContextProvider } from './Context/Scroll.context.tsx'
//@ts-ignore
import { LangContextProvider } from './Context/I18n.context'
import { DefaultRouter } from './Routes'
import { Router } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <ScrollIndexContextProvider>
        <LangContextProvider>
          <Router history={history}>
            <DefaultRouter />
          </Router>
        </LangContextProvider>
      </ScrollIndexContextProvider>
    </div>
  )
}
export default App
