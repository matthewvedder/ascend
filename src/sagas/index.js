import * as AuthSagas from './AuthSagas'

export default function* rootSaga() {
  yield [
    AuthSagas.watchAuth()
  ]
}
