import React from 'react'
import { Footer, FooterProps } from './Footer'

export default {
    component: Footer,
    title: 'Footer'
}

export const primary = () => {
    /* eslint-disable-next-line */
    const props: FooterProps = {}

    return <Footer />
}

export const withText = () => {
    const props: FooterProps = {
        text: 'This is custom text'
    }

    return <Footer {...props} />
}
