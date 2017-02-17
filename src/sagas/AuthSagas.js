import firebase from 'firebase'
import { takeLatest } from 'redux-saga/effects'
import { GOOGLE_AUTH, SIGN_OUT } from '../actions/types'

function* googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider()

  yield firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => ({ token: result.credential.accessToken }))
    .catch(error => (console.warn(error)))
}

function* signOut() {
  yield firebase
    .auth()
    .signOut()
    .then(() => console.log('signed out'))
    .catch(error => (console.warn(error)))
}

export function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH, googleAuth)
  yield takeLatest(SIGN_OUT, signOut)
}
