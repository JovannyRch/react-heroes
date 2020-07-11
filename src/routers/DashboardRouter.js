import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/hero/:id" component={HeroScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}
