// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LoginForm> = (args) => {
//   return <LoginForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LoginForm from './LoginForm'

export const generated = () => {
  return (
    <div className="h-fit w-96">
      <LoginForm />
    </div>
  )
}

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>
