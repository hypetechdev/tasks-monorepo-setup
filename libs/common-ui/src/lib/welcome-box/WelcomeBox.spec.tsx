import React from 'react'
import { render } from '@testing-library/react'

import WelcomeBox from './WelcomeBox'

describe('WelcomeBox', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<WelcomeBox />)
        expect(baseElement).toBeTruthy()
    })
})
