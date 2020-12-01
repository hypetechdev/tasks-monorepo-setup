import React from 'react'
import { CircularProgress } from '@material-ui/core'

import { useUser } from '@hyt/api-hooks'

// https://jsonplaceholder.typicode.com/users

interface Props {}

export const ProfilePage = (props: Props) => {
    const { user, isLoading } = useUser('1')

    if (isLoading) return <CircularProgress />

    return (
        <div>
            Hi <br /> this is your profile {user.name}
        </div>
    )
}
