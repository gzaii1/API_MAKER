import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

 const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/home2" component={Home}/>
              <Redirect from="/*" to="/home" strict exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes