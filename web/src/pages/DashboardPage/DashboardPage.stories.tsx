import type { ComponentMeta } from '@storybook/react'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import DashboardPage from './DashboardPage'

export const generated = () => {
  return (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  )
}

export default {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>
