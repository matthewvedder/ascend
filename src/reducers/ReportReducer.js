import { FETCH_REPORTS_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  reports: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REPORTS_SUCCESS: {
      const { reports } = action
      return { ...state, reports }
    }
    default:
      return state
  }
}
