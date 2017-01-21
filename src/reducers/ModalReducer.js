import { SHOW_CREATE_REPORT, HIDE_MODAL } from '../actions/types'

const INITIAL_STATE = {
  modal: null,
  clickedLatlng: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CREATE_REPORT:
      return {
        ...state,
        modal: 'CREATE_REPORT_FORM',
        clickedLatlng: action.payload
      }
    case HIDE_MODAL:
      return { ...state, modal: 'HIDE_MODAL' }
    default:
      return state
  }
}
