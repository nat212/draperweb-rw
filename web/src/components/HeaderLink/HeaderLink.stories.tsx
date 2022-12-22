// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HeaderLink> = (args) => {
//   return <HeaderLink {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HeaderLink from './HeaderLink'

export const generated = () => {
  return <HeaderLink />
}

export default {
  title: 'Components/HeaderLink',
  component: HeaderLink,
} as ComponentMeta<typeof HeaderLink>
