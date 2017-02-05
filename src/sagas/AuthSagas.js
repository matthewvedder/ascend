import firebase from 'firebase'
import { takeLatest, put } from 'redux-saga/effects'
import { GOOGLE_AUTH, HANDLE_AUTH_DATA } from '../actions/types'

function* googleAuth() {
// THIS IS REALLY UGLY
  const provider = new firebase.auth.GoogleAuthProvider()
  let token = ''
  let user = {}

  yield firebase.auth().signInWithPopup(provider).then((result) => {
    token = result.credential.accessToken
    user = result.user.providerData[0]
  }).catch((error) => {
    console.warn(error)
  })

  yield put({ type: HANDLE_AUTH_DATA, token, user })
}

export function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH, googleAuth)
}
