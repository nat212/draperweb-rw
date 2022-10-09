import React from 'react'

export const decorators = [
  (Story) => (
    <div className="m-8" data-theme="dracula">
      <Story />
    </div>
  ),
]
