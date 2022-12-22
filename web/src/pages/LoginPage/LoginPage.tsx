import { useEffect, useRef, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  EmailField,
  Form,
  FormError,
  PasswordField,
  RWGqlError,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

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
      setError(null)
    }
    setLoading(false)
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <Form className="card w-96 bg-base-300 shadow-xl" onSubmit={onSubmit}>
          <FormError
            error={error}
            titleClassName="font-semibold"
            wrapperClassName="text-error bg-red-100 text-sm p-3 rounded"
          />
          <figure>
            <img
              className="mt-4 rounded-full bg-slate-500"
              src="/images/bushy-transparent.png"
              alt="Bushy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-light">DraperWeb</h2>
            <div className="my-3">
              <label htmlFor="username">Email address</label>
              <EmailField
                name="username"
                placeholder="Email Address"
                className="input w-full"
                errorClassName="input w-full input-error"
                validation={{ required: true }}
              />
              <FieldError className="normal-case text-error" name="username" />
              <label className="mt-3 block" htmlFor="password">
                Password
              </label>
              <PasswordField
                name="password"
                placeholder="Password"
                className="input w-full"
                validation={{ required: true }}
              />
              <FieldError name="password" className="text-error" />
            </div>
            <div className="card-actions justify-end">
              <Submit disabled={loading} className="btn btn-primary">
                Login
              </Submit>
            </div>
          </div>
        </Form>
      </main>
    </>
  )
}

export default LoginPage
