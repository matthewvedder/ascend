import * as FirebaseSagas from './FirebaseSagas'

export default function* rootSaga() {
  yield [
    FirebaseSagas.helloSaga()
  ]
}
