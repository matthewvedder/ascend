import { takeLatest } from 'redux-saga/effects'
import { GOOGLE_AUTH } from '../actions/types'

function* googleAuth(action) {
  console.log('har!')
}

export function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH, googleAuth)
}
