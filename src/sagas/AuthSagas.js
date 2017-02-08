import firebase from 'firebase'
import { takeLatest, put } from 'redux-saga/effects'
import { GOOGLE_AUTH, HANDLE_AUTH_DATA } from '../actions/types'

function* googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider()

  const auth = yield firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return {
        token: result.credential.accessToken,
        user: result.user.providerData[0]
      }
    }).catch((error) => {
      console.warn(error)
    })

  const { user, token } = auth

  yield put({ type: HANDLE_AUTH_DATA, user, token, provider })
}

export function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH, googleAuth)
}
