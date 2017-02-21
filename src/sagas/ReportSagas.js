import firebase from 'firebase'
import { takeLatest, select, put } from 'redux-saga/effects'
import { CREATE_REPORT, HIDE_MODAL } from '../actions/types'

function* createReport(action) {
  const state = yield select()
  const userID = state.auth.user.uid
  const reportID = userID + Date.now()
  yield firebase.database().ref('/reports').push(action.values)
  yield firebase.database().ref(`users/${userID}/reports/`).push({ reportID })
  yield put({ type: HIDE_MODAL })
}

export function* watchReports() {
  yield takeLatest(CREATE_REPORT, createReport)
}
