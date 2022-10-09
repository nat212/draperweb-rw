// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Button> = (args) => {
//   return <Button {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Button, { Props } from './Button'

export const generated = ({ style = 'primary', ...props }: Props) => {
  return (
    <Button {...props} style={style}>
      {style} button
    </Button>
  )
}

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>
