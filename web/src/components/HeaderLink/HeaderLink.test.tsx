import { render } from '@redwoodjs/testing/web'

import HeaderLink from './HeaderLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderLink />)
    }).not.toThrow()
  })
})
