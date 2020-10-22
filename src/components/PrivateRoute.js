import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import MainPage from "./MainPage"

export default function PrivateRoute(props) {
    return <Route {...props} render={ (routerProps) => {
        return localStorage.token
            // Need to check this token with the backend and if its vaild render for that person
            ?  (
                <>
                    <MainPage {...routerProps}/>
                </>
            )
            : <Redirect to="/login" />
    }} />
}
