import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import LoginForm from './LoginForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginForm />)
    }).not.toThrow()
  })

  it('should display the correct content', () => {
    render(<LoginForm />)
    expect(screen.getByText('DraperWeb')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByAltText('Bushy')).toHaveAttribute(
      'src',
      '/images/bushy-transparent.png'
    )
  })

  it('should not submit if there are errors', async () => {
    const onSubmit = jest.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await waitFor(() => userEvent.click(screen.getByText('Login')))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should handle submit', async () => {
    const onSubmit = jest.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await waitFor(() =>
      userEvent.type(
        screen.getByPlaceholderText('Email Address'),
        'test@example.com'
      )
    )
    await waitFor(() =>
      userEvent.type(screen.getByPlaceholderText('Password'), 'password')
    )
    await waitFor(() => userEvent.click(screen.getByText('Login')))
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(
      {
        email: 'test@example.com',
        password: 'password',
      },
      expect.objectContaining({ _reactName: 'onSubmit', type: 'submit' })
    )
  })
})
