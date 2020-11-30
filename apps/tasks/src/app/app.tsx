import React, { useEffect } from 'react'

import './app.css'

import { Footer, Header } from '@hyt/common-ui'
import { KEYS, myStorage } from '@hyt/common-utils'

export function App() {
    useEffect(() => {
        myStorage.save(KEYS.LOGIN_TIME, Date.now())
    }, [])

    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./app.css file.
     */
    return (
        <div className="app">
            <Header title={'My NX app'} />
            <main>
                <h2>Resources &amp; Tools</h2>
            </main>
            <Footer />
        </div>
    )
}

export default App
