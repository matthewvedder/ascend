import firebase from 'firebase'
import { takeLatest, select, put } from 'redux-saga/effects'
import { CREATE_REPORT, HIDE_MODAL } from '../actions/types'
// import { fetchReportsSuccess } from '../actions'

function* createReport(action) {
  const state = yield select()
  const userID = state.auth.user.uid
  const reportKey = firebase.database().ref().child('reports').push().key

  const updates = {}
  updates[`/reports/${reportKey}`] = action.values
  updates[`users/${userID}/reports/${reportKey}`] = true

  yield firebase.database().ref().update(updates)
  yield put({ type: HIDE_MODAL })
}

// function* fetchReports() {
//  yield firebase.database().ref('/reports')
//    .on('value', (snapshot) => {
//      console.log((reports))
//      fetchReportsSuccess()
//    })
// }

export function* watchReports() {
  yield takeLatest(CREATE_REPORT, createReport)
  // yield takeLatest(FETCH_REPORTS, fetchReports)
}
