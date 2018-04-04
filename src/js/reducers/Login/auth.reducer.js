
import { loginConstants } from '../../constants'

let token = JSON.parse(localStorage.getItem('token'))
const initialState = token ? { loggedIn: true } : {}

export function auth(state = initialState, action) {
  switch (action.type) {
  case loginConstants.LOGIN_REQUEST:
    return {
      loading: true
    }
  case loginConstants.LOGIN_SUCCESS:
    return {
      loggedIn: true,
      user: action.user
    }
  case loginConstants.LOGIN_FAILURE:
    return {
      error: action.error
    }
  case loginConstants.LOGOUT:
    return {}
  default:
    return state
  }
}
