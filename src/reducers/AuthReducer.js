import { HANDLE_AUTH_DATA } from '../actions/types'

const INITIAL_STATE = {
  user: {},
  token: '',
  provider: ''
}

export default (state = INITIAL_STATE, action) => {
  const { user, token, provider } = action
  switch (action.type) {
    case HANDLE_AUTH_DATA:
      return { ...state, user, token, provider }
    default:
      return state
  }
}
