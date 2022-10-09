// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router } from '@redwoodjs/router'

import ForgotPasswordPage from 'src/pages/ForgotPasswordPage/ForgotPasswordPage'
import HomePage from 'src/pages/HomePage/HomePage'
import LoginPage from 'src/pages/LoginPage/LoginPage'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'
import ResetPasswordPage from 'src/pages/ResetPasswordPage/ResetPasswordPage'
import SignupPage from 'src/pages/SignupPage/SignupPage'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
