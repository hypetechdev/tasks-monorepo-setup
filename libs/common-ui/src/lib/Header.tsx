import React from 'react'

import { myStorage } from '@hyt/common-utils'

export interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title = 'No title' }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
