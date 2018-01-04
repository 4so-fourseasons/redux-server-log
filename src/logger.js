// @flow

import axios from 'axios'

import { partial } from 'functionstein'

import { LOG_TO_SERVER } from './constants'

export const postLog = (postFunc: Function, apiUrl: string, log: Object): Promise<*> => {
  const dateTime = new Date()
  const timeStamp = dateTime.toLocaleString()

  const logContent = {
    timeStamp,
    log
  }

  return postFunc(`${apiUrl}/logging`, logContent)
}

export const postLogWithAxios = partial(postLog, axios.post)

export const createLoggerMiddleware = (postFunc: Function, apiUrl: string) =>
  () => (next: Function) => (action: Object) => {
    const result = next(action)

    if (action.type === LOG_TO_SERVER) {
      postFunc(apiUrl, action.payload)
    }

    return result
  }

export const createLoggerWithPost = partial(createLoggerMiddleware, postLogWithAxios)
