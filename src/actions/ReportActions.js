import { CREATE_REPORT, FETCH_REPORTS } from './types'

export const createReport = values => ({ type: CREATE_REPORT, values })
export const fetchReports = () => ({ type: FETCH_REPORTS })
