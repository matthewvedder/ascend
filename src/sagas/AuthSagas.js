import firebase from 'firebase'
import { takeLatest } from 'redux-saga/effects'
import { GOOGLE_AUTH } from '../actions/types'

function* googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider()

  yield firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => ({ token: result.credential.accessToken }))
    .catch(error => ({ error }))
}

export function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH, googleAuth)
}
