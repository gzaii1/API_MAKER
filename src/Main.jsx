import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Main = (props) => {
    return (
      <>
        <BrowserRouter>
          <Switch>
          </Switch>
          <Switch>
            <Route path="/home" component={Home}/>
            <Redirect from="/*" to="/home" strict exact/>
          </Switch>
        </BrowserRouter>
      </>
    )
}

export default Main