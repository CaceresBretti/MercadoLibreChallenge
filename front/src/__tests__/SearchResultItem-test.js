import SearchResultItem from '../components/SearchResultItem';
import { render } from '@testing-library/react'


describe('Search Result Item', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<SearchResultItem />)

        expect(asFragment(<SearchResultItem />)).toMatchSnapshot()
    })
})