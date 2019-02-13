import React from 'react'
import { Route, withRouter, Switch} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Home from '../home/home'
import Art from './art'

const GlobalStyle = createGlobalStyle`
  ${reset}
  box-sizing: border-box;
  font-family: "Roboto", "Open Sans";
`
Art()

const App = () => (
  <div>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={withRouter(Home)} />
      <Route component={withRouter(Home)} />
    </Switch>
  </div>
)

export default App
