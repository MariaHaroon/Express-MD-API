import React, { useContext } from 'react'
import admin from './admin'
import user from './user'
import guest from './guest'
import { GlobalContext } from './context/context'
import {decodeToken} from 'react-jwt'

export const AppRoute = '/'

const ComponentByRoles = {
  'admin': admin,
  'user': user,
  'guest': guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}