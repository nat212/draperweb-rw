import type { ComponentMeta, ComponentStory } from '@storybook/react'

import MainLayout from './MainLayout'

export const generated: ComponentStory<typeof MainLayout> = (args) => {
  return (
    <MainLayout {...args}>
      <h1 className="text-3xl">Hello, world!</h1>
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Hi mom</h2>
          <p>Content, content, content...</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default {
  title: 'Layouts/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>
