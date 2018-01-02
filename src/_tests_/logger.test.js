import { postLog } from '../logger'

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
