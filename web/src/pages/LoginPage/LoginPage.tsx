import { useEffect, useRef, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { RWGqlError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LoginForm from 'src/components/LoginForm/LoginForm'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const [error, setError] = useState<RWGqlError | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    setLoading(true)
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      setError(response.error)
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
    setLoading(false)
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <LoginForm
          className="w-96"
          error={error}
          loading={loading}
          onSubmit={onSubmit}
        />
      </main>
    </>
  )
}

export default LoginPage
