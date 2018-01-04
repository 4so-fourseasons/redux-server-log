// @flow

import { logToServer } from './actions'

import { createLoggerWithPost } from './logger'

export {
  logToServer,
  createLoggerWithPost as createLoggerMiddleware
}
