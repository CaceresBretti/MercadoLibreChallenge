import Header from '../components/Header';
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<BrowserRouter><Header /></BrowserRouter>)

        expect(asFragment(<Header />)).toMatchSnapshot()
    })
})