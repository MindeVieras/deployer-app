
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { ENVIRONMENT } from 'Config'
import rootReducer from '../reducers'

let reduxStore = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

// If development environment use redux-devtools
if (ENVIRONMENT === 'development') {
  reduxStore = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware
      )
    )
  )
}

export const store = reduxStore
