import { SHOW_CREATE_REPORT, SHOW_AUTH_FORM, HIDE_MODAL } from './types'

export const showCreateReport = clickedLatlng => ({ type: SHOW_CREATE_REPORT, payload: clickedLatlng })
export const showAuthForm = () => ({ type: SHOW_AUTH_FORM })
export const hideModal = () => ({ type: HIDE_MODAL })
