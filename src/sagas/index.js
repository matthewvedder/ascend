import * as AuthSagas from './AuthSagas'
import * as ReportSagas from './ReportSagas'

export default function* rootSaga() {
  yield [
    AuthSagas.watchAuth(),
    ReportSagas.watchReports()
  ]
}
