import {
  logToServer
} from '../actions'

import {
  LOG_TO_SERVER
} from '../constants'

describe('logToServer()', () => {
  it('should return log action', () => {
    const result = logToServer({ msg: 'Heinrich Kerze is awesome!' })

    expect(result).toEqual({
      type: LOG_TO_SERVER,
      payload: { msg: 'Heinrich Kerze is awesome!' }
    })
  })
}) // end logToServer()
