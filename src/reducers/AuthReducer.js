import { SET_CURRENT_USER, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
  user: null
}

export default (state = INITIAL_STATE, action) => {
  const { user } = action
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user }
    case SIGN_OUT:
      return { INITIAL_STATE }
    default:
      return state
  }
}
