
import { API_BASE_URL } from 'Config'

export const loginService = {
  login,
  logout
}

function login(email, password) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch(API_BASE_URL+'/authenticate', requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response)
      }
      return response.json()
    })
    .then(res => {
      // login successful if there's a jwt token in the response
      if (res.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', JSON.stringify(res.token))
      }
      return res
    })
    .catch(error => {
      return error
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token')
}
