import { CREATE_REPORT, FETCH_REPORTS, FETCH_REPORTS_SUCCESS } from './types'

export const createReport = values => ({ type: CREATE_REPORT, values })
export const fetchReports = () => ({ type: FETCH_REPORTS })
export const fetchReportsSuccess = reports => ({ type: FETCH_REPORTS_SUCCESS, reports })
