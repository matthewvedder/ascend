import firebase from 'firebase'
import { takeLatest } from 'redux-saga/effects'
import { STORE_IMAGE } from '../actions/types'

function* storeImage(action) {
  const { reportKey, image } = action
  const imageRef = storageRef.child(`images/${reportKey}/${image[0].name}`)
  imageRef.put(image[0]).then((snapshot) => {
  })
}

export function* watchImages() {
  yield takeLatest(STORE_IMAGE, storeImage)
}
