import { getDirectiveName, mockRedwoodDirective } from '@redwoodjs/testing/api'

import requireAuth from './requireAuth'

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy()
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth')
  })

  it('should not throw an error if the user is logged in', () => {
    // If you want to set values in context, pass it through e.g.
    // mockRedwoodDirective(requireAuth, { context: { currentUser: { id: 1, name: 'Lebron McGretzky' } }})
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: { currentUser: { id: 1 } },
    })

    expect(mockExecution).not.toThrowError()
  })

  it('should throw an error if the user is not logged in', () => {})
  const mockExecution = mockRedwoodDirective(requireAuth, { context: {} })

  expect(mockExecution).toThrowError()
})
