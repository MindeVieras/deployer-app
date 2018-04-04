
import { loginConstants } from '../../constants'
import { loginService } from '../../services'
import { history } from '../../helpers'

export const loginActions = {
  login,
  logout
}

function login(email, password) {
  return dispatch => {
    dispatch(request())

    loginService.login(email, password)
      .then(function(res) {
        if (res.error) {
          dispatch(failure(res.message))
        }
        else {
          const { user } = res
          dispatch(success(user))
          history.push('/')
        }
      })
  }

  function request() { return { type: loginConstants.LOGIN_REQUEST } }
  function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }
  function success(user) { return { type: loginConstants.LOGIN_SUCCESS, user } }
}

function logout() {
  loginService.logout()
  return { type: loginConstants.LOGOUT }
}
