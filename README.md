[![Build Status](https://travis-ci.org/4so-fourseasons/redux-server-log.svg?branch=add-ci)](https://travis-ci.org/4so-fourseasons/redux-server-log)
[![npm version](https://badge.fury.io/js/%404so-fourseasons%2Fredux-server-log.svg)](https://badge.fury.io/js/%404so-fourseasons%2Fredux-server-log)


# Redux-Server-Log

Redux-Server-Log is a simple, naive redux-middleware that posts information to a remote url.


# Installation

`npm i @4so-fourseasons/redux-server-log`

## Usage

To use Redux-Server-Log you just need to create the logger middleware and add
it to your store. Then you are able to import and dispatch the `logToServer` action.
See [API](#api) for an example.


## API

### createLoggerMiddleware

`createLoggerMiddleware (apiUrl: string) => Middleware`

Creates the logger middleware which can then be added to your redux store.


#### Example

```js
// store.js
import { createStore, applyMiddleware, compose } from 'redux'
import { install } from 'redux-loop'
import { createLoggerMiddleware } from '@4so-fourseasons/redux-server-log'

import { API_URL } from 'config'

import rootReducer from './rootReducer'

// Provide an api endpoint where logs should be posted to
const logger = createLoggerMiddleware(API_URL)

const configureStore = (initialState: Object): Object => {
  // Add middleware to this array if necessary
  const middleWares = [
    logger
  ]

  const enhancers = [
    install(),
    applyMiddleware(...middleWares)
  ]

  const composeEnhancers =
    process.env.NODE_ENV !== 'prod' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )

  return store
}

export {
  configureStore as default
}

```


### logToServer

`logToServer (log: any) => { type: 'LOG_TO_SERVER', payload: log }`

ActionCreator to easily dispatch server log actions.


## Versioning

We use [SemVer](http://semver.org/) for versioning.
