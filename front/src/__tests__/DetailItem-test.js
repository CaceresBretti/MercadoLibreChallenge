import { render } from '@testing-library/react'
import DetailItem from '../components/DetailItem';


describe('Search Result Detail Item', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<DetailItem />)

        expect(asFragment(<DetailItem />)).toMatchSnapshot()
    })
})