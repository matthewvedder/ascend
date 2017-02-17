import { GOOGLE_AUTH, SET_CURRENT_USER, SIGN_OUT } from './types'

export const googleAuth = () => ({ type: GOOGLE_AUTH })
export const setCurrentUser = user => ({ type: SET_CURRENT_USER, user })
export const signOut = () => ({ type: SIGN_OUT })
