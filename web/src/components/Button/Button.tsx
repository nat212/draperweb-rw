import cn from 'classnames'

export interface Props {
  children?: React.ReactNode
  className?: string
  style?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'default'
    | 'error'
    | 'warning'
    | 'success'
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({
  children,
  className,
  style = 'primary',
  onClick,
  type = 'button',
}: Props) => {
  const cls = cn(
    'btn',
    {
      [`btn-${style}`]: style !== 'default',
    },
    className
  )
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

// Force tailwind to include these styles
// btn-primary btn-secondary btn-accent btn-error btn-warning btn-success

export default Button
