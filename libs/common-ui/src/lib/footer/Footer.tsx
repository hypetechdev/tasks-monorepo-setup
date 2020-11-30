import React from 'react'

import './Footer.css'

/* eslint-disable-next-line */
export interface FooterProps {
    text?: string
}

export function Footer(props: FooterProps) {
    const { text = new Date().getFullYear() } = props
    return (
        <footer>
            <h4>{text}</h4>
        </footer>
    )
}

export default Footer
