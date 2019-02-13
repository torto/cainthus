import {
  REQ_PHOTOS_CLEAN
} from '../reducers/photos'

export const cleanRequestPhotos = () => dispatch => {
  dispatch({
    type: REQ_PHOTOS_CLEAN,
    payload: {}
  })
}
