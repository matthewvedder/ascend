import firebase from 'firebase'
import { takeLatest, put } from 'redux-saga/effects'
import { GOOGLE_AUTH, SIGN_OUT, HIDE_MODAL } from '../actions/types'

function* googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider()

  yield firebase
    .auth()
    .signInWithRedirect(provider)
    .then(result => ({ token: result.credential.accessToken }))
    .catch(error => (console.warn(error)))
  yield put({ type: HIDE_MODAL })
}

function* signOut() {
  yield firebase
    .auth()
    .signOut()
    .catch(error => (console.warn(error)))
}

export function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH, googleAuth)
  yield takeLatest(SIGN_OUT, signOut)
}
