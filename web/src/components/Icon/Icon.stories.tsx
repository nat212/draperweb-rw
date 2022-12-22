// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Icon> = (args) => {
//   return <Icon {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Icon, { IconProps } from './Icon'

export const generated = ({ name }: IconProps) => {
  return <Icon name={name} />
}

export const userExample = () => {
  return <Icon name={'user'} />
}

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>
