import {
  logToServer
} from '../actions'

import {
  postLog,
  createLoggerMiddleware
} from '../logger'

describe('postLog()', () => {
  it('should call postFunc with correct url', () => {
    const postFn = jest.fn()

    postLog(postFn, 'http://example.com', {})

    expect(postFn.mock.calls.length).toBe(1)

    expect(postFn.mock.calls[0]).toEqual([
      'http://example.com/logging',
      expect.anything()
    ])
  })
})

describe('createLoggerMiddleware', () => {
  const setUp = () => {
    const next = jest.fn()

    const postFn = jest.fn()

    const logger = createLoggerMiddleware(postFn, 'example.com/api/endpoint')

    const invoke = (action) => logger()(next)(action)

    return { next, invoke, postFn }
  }

  it('should pass through function with type != \'LOG_TO_SERVER\'', () => {
    const { next, invoke } = setUp()

    const action = { type: 'TEST' }

    invoke(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  it('should call postFn if action has \'LOG_TO_SERVER\' type', () => {
    const { next, invoke, postFn } = setUp()

    const action = logToServer({ msg: 'Heinrich Kerze is awesome!' })

    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
    expect(postFn).toHaveBeenCalledWith('example.com/api/endpoint', {
      msg: 'Heinrich Kerze is awesome!'
    })
  })
})
