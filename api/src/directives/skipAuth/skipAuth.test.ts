import { getDirectiveName, mockRedwoodDirective } from '@redwoodjs/testing/api'

import skipAuth from './skipAuth'

describe('skipAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(skipAuth.schema).toBeTruthy()
    expect(getDirectiveName(skipAuth.schema)).toBe('skipAuth')
  })

  it('should not throw an error if the user is not logged in', () => {
    const mockExecution = mockRedwoodDirective(skipAuth, { context: {} })

    expect(mockExecution).not.toThrowError()
  })
})
