import firebase from 'firebase'
import { takeLatest, select, put } from 'redux-saga/effects'
import { CREATE_REPORT, FETCH_REPORTS, HIDE_MODAL } from '../actions/types'

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

function* fetchReports() {
  const { currentUser } = firebase.auth()
  firebase.database().ref('/reports')
    .on('value', snapshot => {
      console.log(snapshot.val())
    })
}

export function* watchReports() {
  yield takeLatest(CREATE_REPORT, createReport)
  yield takeLatest(FETCH_REPORTS, fetchReports)
}
