import { render, screen } from '@redwoodjs/testing/web'

import Header from './Header'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Header', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Header />)
    }).not.toThrow()
    const navbar = screen.getByRole('navigation', { name: 'navigation bar' })
    expect(navbar).toBeInTheDocument()
    expect(navbar).toHaveClass('navbar')
  })
  it('should display links', () => {
    render(<Header />)
    const expectedLinks = ['Dashboard']
    for (const link of expectedLinks) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })
})
