import { render, screen } from '@redwoodjs/testing/web'

import Icon from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon name="user" />)
    }).not.toThrow()
  })

  it('should set the className to the correct icon', () => {
    render(<Icon name={'user'} />)
    expect(screen.getByRole('presentation')).toHaveClass('gg-user')
  })
})
