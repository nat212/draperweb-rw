import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import LoginPage from 'src/pages/LoginPage/LoginPage'

describe('LoginPage', () => {
  it('should render', () => {
    expect(() => {
      render(<LoginPage />)
    }).not.toThrow()
  })

  it('should display the correct content', () => {
    render(<LoginPage />)
    expect(screen.getByText('DraperWeb')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByAltText('Bushy')).toHaveAttribute(
      'src',
      '/images/bushy-transparent.png'
    )
  })

  it('should not submit if there are errors', async () => {
    const onSubmit = jest.fn()
    render(<LoginPage />)

    await waitFor(() => userEvent.click(screen.getByText('Login')))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should login', async () => {
    render(<LoginPage />)
    const email = 'test@example.com'
    const password = 'password'

    await waitFor(() =>
      userEvent.type(screen.getByLabelText('Email address'), email)
    )
    await waitFor(() =>
      userEvent.type(screen.getByLabelText('Password'), password)
    )
    // await waitFor(() => userEvent.click(screen.getByText('Login')))
    // TODO: Implement login test
  })
})
