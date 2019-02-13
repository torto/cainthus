export const REQ_PHOTOS_SUCESS = 'result/PHOTOS_SUCESS'
export const REQ_PHOTOS_ERROR = 'result/PHOTOS_ERROR'
export const REQ_PHOTOS_LOADING = 'result/PHOTOS_LOADING'
export const REQ_PHOTOS_CLEAN = 'result/PHOTOS_CLEAN'

const initialState = {
  data: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_PHOTOS_SUCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        loading: false,
        error: null
      }
    case REQ_PHOTOS_CLEAN:
      return {
        ...state,
        data: [],
        loading: false,
        error: null
      }
    case REQ_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.data
      }
    case REQ_PHOTOS_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      }
    default:
      return state
  }
}
