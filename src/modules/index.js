import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import photos from './photos/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  photos
})
