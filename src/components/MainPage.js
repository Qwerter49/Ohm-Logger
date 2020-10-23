import React from 'react'
import NavbarContainer from './NavbarContainer'
import Meditate from './Meditate'
import { Route, Switch } from 'react-router-dom'
import CalendarContainer from './CalendarContainer'
import Profile from './Profile'

export default function MainPage(props) {

    return (
        <div className="mainPageContainer d-flex flex-row">
            <NavbarContainer {...props}/>
            <Switch>
                <Route path="/meditate" render={(routeProps)=> <Meditate {...routeProps} />}/>
                <Route path="/profile" render={(routeProps)=> <Profile {...routeProps} />}/>
                <Route path="/calendar" render={(routeProps)=> <CalendarContainer {...routeProps} />}/>
            </Switch>
        </div>
    )
}
