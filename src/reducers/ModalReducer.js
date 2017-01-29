import { SHOW_CREATE_REPORT, HIDE_MODAL, SHOW_AUTH_FORM } from '../actions/types'

const INITIAL_STATE = {
  modal: null,
  clickedLatlng: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CREATE_REPORT:
      return {
        ...state,
        modal: SHOW_CREATE_REPORT,
        clickedLatlng: action.payload
      }
    case SHOW_AUTH_FORM:
      return {
        ...state,
        modal: SHOW_AUTH_FORM
      }
    case HIDE_MODAL:
      return { ...state, modal: 'HIDE_MODAL' }
    default:
      return state
  }
}
