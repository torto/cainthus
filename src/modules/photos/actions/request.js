import axios from 'axios'
import {
  REQ_PHOTOS_SUCESS,
  REQ_PHOTOS_ERROR,
  REQ_PHOTOS_LOADING
} from '../reducers/photos'

const dependencies = {
  axios
}


export const getPhotosByTag= (tag, page, injection) => async dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)
  const PER_PAGE = 20
  const URL_WINNER = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&api_key=4ae06b5c8911d4f6d7f5ed33f5c2da63&format=json&extras=date_taken,%20owner_name,%20tags,%20url_m&per_page=${PER_PAGE}&page=${page}`
  if(!tag) return
  dispatch({
    type: REQ_PHOTOS_LOADING,
    payload: {}
  })
  try {
    const { data: rawData } = await axios.get(URL_WINNER)
    const { photos: { photo } } = JSON.parse(rawData.replace('jsonFlickrApi(', '').replace('})', '}'))
    return dispatch({
      type: REQ_PHOTOS_SUCESS,
      payload: {
        data: photo
      }
    })

  } catch(error) {
    return dispatch({
      type: REQ_PHOTOS_ERROR,
      payload: {
        data: error.name
      }
    })
  }
}
