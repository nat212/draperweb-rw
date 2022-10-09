import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Button, { Props } from './Button'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Button', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Button />)
    }).not.toThrow()
  })

  it('should display the appropriate class', () => {
    const ctx = render(<Button />)
    expect(screen.getByRole('button')).toHaveClass('btn')
    expect(screen.getByRole('button')).toHaveClass('btn-primary')
    const button = screen.getByRole('button')

    const availableStyles = [
      'primary',
      'secondary',
      'success',
      'error',
      'accent',
    ]

    const checkStyles = (currentStyle: Props['style']) => {
      for (const style in availableStyles.filter((s) => s !== currentStyle)) {
        expect(button).not.toHaveClass(`btn-${style}`)
      }
    }

    ctx.rerender(<Button style={'default'} />)
    expect(button).toHaveClass('btn')
    checkStyles('default')

    for (const style of availableStyles) {
      ctx.rerender(<Button style={style as Props['style']} />)
      expect(button).toHaveClass(`btn-${style}`)
      checkStyles(style as Props['style'])
    }
  })

  it('should handle onClick', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} />)

    const button = screen.getByRole('button')
    await waitFor(() => userEvent.click(button))

    expect(onClick).toHaveBeenCalled()
  })
})
