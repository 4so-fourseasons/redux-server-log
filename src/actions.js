// @flow

import {
  LOG_TO_SERVER
} from './constants'

export const logToServer = (log: Object) => {
  return {
    type: LOG_TO_SERVER,
    payload: log
  }
}
