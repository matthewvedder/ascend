import { SHOW_CREATE_REPORT, SHOW_AUTH_FORM, HIDE_MODAL } from './types'

export const showAuthForm = () => ({ type: SHOW_AUTH_FORM })
export const hideModal = () => ({ type: HIDE_MODAL })
export const showCreateReport = clickedLatlng => ({
  type: SHOW_CREATE_REPORT,
  payload: clickedLatlng
})
