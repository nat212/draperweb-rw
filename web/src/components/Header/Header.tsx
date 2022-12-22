import { routes } from '@redwoodjs/router'

import HeaderLink from 'src/components/HeaderLink/HeaderLink'
import Icon from 'src/components/Icon/Icon'

const Header = () => {
  return (
    <header role="navigation">
      <nav className="navbar bg-base-300" aria-label="navigation bar">
        <div className="flex-1">
          <HeaderLink to={routes.dashboard()} />
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle">
            <Icon name="user" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
