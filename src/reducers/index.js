import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import InputReducer from './InputReducer'
import AuthReducer from './AuthReducer'
import ReportReducer from './ReportReducer'

export default combineReducers({
  modal: ModalReducer,
  input: InputReducer,
  auth: AuthReducer,
  reports: ReportReducer
})
