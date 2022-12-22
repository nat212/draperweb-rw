import { render } from '@redwoodjs/testing/web'

import Shortcut from './Shortcut'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Shortcut', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Shortcut />)
    }).not.toThrow()
  })
})
