import {
  logToServer,
  createLoggerMiddleware
} from '../index'

describe('index', () => {
  it('should export logToServer()', () => {
    expect(typeof logToServer).toBe('function')
  })

  it('should export createLoggerMiddleware()', () => {
    expect(typeof createLoggerMiddleware).toBe('function')
  })
})
