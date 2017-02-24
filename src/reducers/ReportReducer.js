import { FETCH_REPORTS_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  reports: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REPORTS_SUCCESS:
      console.log(action.reports)
      return { ...state, reports: action.reports }
    default:
      return state
  }
}
