import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import InputReducer from './InputReducer'

export default combineReducers({
  modal: ModalReducer,
  input: InputReducer
})
