import React from 'react'
import './Assets/css/commom.scss'
import './Assets/css/v1.scss'
import './Assets/css/v1.mobile.scss'
import './Assets/css/libraries.scss'

import history from './Config/history'

//@ts-ignore
import { ScrollIndexContextProvider } from './Context/Scroll.context.tsx'
//@ts-ignore
import { LangContextProvider } from './Context/I18n.context'
//@ts-ignore
import { ToggleModalContextProvider } from './Context/Modal.context'
import { DefaultRouter } from './Routes'
import { Router } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <ScrollIndexContextProvider>
        <LangContextProvider>
          <ToggleModalContextProvider>
            <Router history={history}>
              <DefaultRouter />
            </Router>
          </ToggleModalContextProvider>
        </LangContextProvider>
      </ScrollIndexContextProvider>
    </div>
  )
}
export default App
