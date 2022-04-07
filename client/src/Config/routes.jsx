import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Signup, SuccessPage } from '../Components'
import allPaths from './paths'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={allPaths?.SIGNUP} exact component={Signup} />
                <Route path={allPaths?.SUCCESS} exact component={SuccessPage} />
            </Switch>
        </Router>
    )
}

export default Routes