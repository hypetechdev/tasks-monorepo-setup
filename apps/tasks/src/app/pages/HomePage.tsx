import { WelcomeBox } from '@hyt/common-ui'
import { Box, Button, Link, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

import React from 'react'

interface Props {
    user?: any
}

const HomePage: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <WelcomeBox />
            <Link component={RouterLink} to="/profile">
                Go to profile
            </Link>
            <Link component={RouterLink} to="/">
                Go to home
            </Link>
        </div>
    )
}

export default HomePage
