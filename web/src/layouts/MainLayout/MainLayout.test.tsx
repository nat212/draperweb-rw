import { render, screen } from '@redwoodjs/testing/web'

import MainLayout from './MainLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MainLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainLayout />)
    }).not.toThrow()
  })

  it('should display content with the correct padding', () => {
    render(<MainLayout />)
    const mainContent = screen.getByRole('main')
    expect(mainContent).toBeInTheDocument()
    expect(mainContent).toHaveClass('px-5', 'py-10')
  })
})
