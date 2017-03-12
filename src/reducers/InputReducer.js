import { INPUT_UPDATE, HIDE_MODAL } from '../actions/types'

const INITIAL_STATE = {
  clickedLatlng: '',
  title: '',
  image: [],
  route: '',
  input: '',
  region: '',
  lat: 0,
  lng: 0,
  description: '',
  activity: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value }
    case HIDE_MODAL: {
      return INITIAL_STATE
    }
    default:
      return state
  }
}
