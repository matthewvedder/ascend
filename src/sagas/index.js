import * as AuthSagas from './AuthSagas'
import * as ReportSagas from './ReportSagas'
import * as ImageSagas from './ImageSagas'

export default function* rootSaga() {
  yield [
    AuthSagas.watchAuth(),
    ReportSagas.watchReports(),
    ImageSagas.watchImages()
  ]
}
