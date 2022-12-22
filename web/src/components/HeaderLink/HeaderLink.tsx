import { Link, useMatch } from '@redwoodjs/router'
import cn from 'classnames'

export interface HeaderLinkProps {
  to: string
}

const HeaderLink = ({ to }: HeaderLinkProps) => {
  const isActive = useMatch(to)
  const cls = cn('btn text-xl normal-case', {
    'btn-ghost': !isActive,
    'btn-primary': isActive,
  })
  return (
    <Link className={cls} to={to}>
      Dashboard
    </Link>
  )
}

export default HeaderLink
