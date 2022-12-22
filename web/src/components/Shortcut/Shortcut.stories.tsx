// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Shortcut> = (args) => {
//   return <Shortcut {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Shortcut from './Shortcut'

export const generated = () => {
  return <Shortcut />
}

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
} as ComponentMeta<typeof Shortcut>
