import React from 'react'
import { text } from '@storybook/addon-knobs'
import { WelcomeBox, WelcomeBoxProps } from './WelcomeBox'

export default {
    component: WelcomeBox,
    title: 'WelcomeBox'
}

export const empty = () => {
    const props: WelcomeBoxProps = {}

    return <WelcomeBox />
}

export const primary = () => {
    const props: WelcomeBoxProps = {
        name: text('name', '')
    }

    return <WelcomeBox {...props} />
}
