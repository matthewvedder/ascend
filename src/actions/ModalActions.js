import { SHOW_CREATE_REPORT, HIDE_MODAL } from './types'

export const showCreateReport = clickedLatlng => ({ type: SHOW_CREATE_REPORT, payload: clickedLatlng })
export const hideModal = () => ({ type: HIDE_MODAL })
