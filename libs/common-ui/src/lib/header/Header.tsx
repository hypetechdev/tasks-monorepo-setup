import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import { useUser } from '@hyt/api-hooks'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
)

interface HeaderProps {
    title?: string
    username?: string
    imageUrl?: string
}

export const Header: React.FC<HeaderProps> = ({ title = '', username, imageUrl, children }) => {
    const classes = useStyles()
    const { user, isLoading } = useUser('1')

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title} + {isLoading ? '' : user.name}
                    </Typography>

                    {children}

                    <Avatar alt={username} src={imageUrl} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
