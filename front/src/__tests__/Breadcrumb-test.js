import { render } from '@testing-library/react'
import Breadcrumbs from '../components/Breadcrumbs';


describe('Breadcrumb', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<Breadcrumbs />)

        expect(asFragment(<Breadcrumbs />)).toMatchSnapshot()
    })
})