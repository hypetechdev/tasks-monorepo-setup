import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header, WelcomeBox } from '@hyt/common-ui'

import HomePage from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'

import './app.css'

export function App() {
    return (
        <div>
            <Header title="SWR example">
                <WelcomeBox />
            </Header>
            <main>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App
