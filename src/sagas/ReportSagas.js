import firebase from 'firebase'
import { takeLatest, select, put } from 'redux-saga/effects'
import { CREATE_REPORT, HIDE_MODAL, STORE_IMAGE } from '../actions/types'
// import { fetchReportsSuccess } from '../actions'

function* createReport(action) {
  const { image, values } = action
  const state = yield select()
  const userID = state.auth.user.uid
  const reportKey = firebase.database().ref().child('reports').push().key
  const updates = {}
  updates[`/reports/${reportKey}`] = values
  updates[`users/${userID}/reports/${reportKey}`] = true

  yield firebase.database().ref().update(updates)
  if (image[0]) { yield put({ type: STORE_IMAGE, image, reportKey }) }
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
