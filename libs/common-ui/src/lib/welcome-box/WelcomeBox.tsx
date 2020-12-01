import { Box, CircularProgress, Typography } from '@material-ui/core'

import React from 'react'

import { useUser } from '@hyt/api-hooks'

import './WelcomeBox.css'

/* eslint-disable-next-line */
export interface WelcomeBoxProps {}

export function WelcomeBox(props: WelcomeBoxProps) {
    const { user, isError, isLoading } = useUser('1')

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <Box p={5}>
            <Typography variant="h2">Welcome {user.name}</Typography>
        </Box>
    )
}

export default WelcomeBox
