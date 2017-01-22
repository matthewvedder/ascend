import { INPUT_UPDATE } from '../actions/types'

const INITIAL_STATE = {
  clickedLatlng: '',
  title: '',
  lat: '',
  lng: '',
  description: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
