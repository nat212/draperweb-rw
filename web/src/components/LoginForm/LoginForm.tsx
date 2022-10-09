import cn from 'classnames'

import {
  EmailField,
  Form,
  FormError,
  PasswordField,
  RWGqlError,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'

interface Props {
  onSubmit?: SubmitHandler<Record<string, string>>
  error?: RWGqlError
  loading?: boolean
  className?: string
}

const LoginForm = ({ onSubmit, error, loading, className }: Props) => {
  const cls = cn('card bg-base-300 shadow-xl', className)
  return (
    <Form className={cls} onSubmit={onSubmit}>
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
        <div className="my-3 space-y-3">
          <EmailField
            name="email"
            placeholder="Email Address"
            className="input w-full"
            validation={{ required: true }}
          />
          <PasswordField
            name="password"
            placeholder="Password"
            className="input w-full"
            validation={{ required: true }}
          />
        </div>
        <div className="card-actions justify-end">
          <Submit disabled={loading} className="btn btn-primary">
            Login
          </Submit>
        </div>
      </div>
    </Form>
  )
}

export default LoginForm
