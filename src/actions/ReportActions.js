import { CREATE_REPORT, FETCH_REPORTS, FETCH_REPORTS_SUCCESS } from './types'

export const fetchReports = () => ({ type: FETCH_REPORTS })
export const fetchReportsSuccess = reports => ({ type: FETCH_REPORTS_SUCCESS, reports })
export const createReport = (inputs) => {
  const { values, image } = inputs
  return { type: CREATE_REPORT, values, image }
}
