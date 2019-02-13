import { expect } from 'chai'
import { stub } from 'sinon'

const { getPhotosByTag } = require('./request')

describe('Request Action', () => {
  it('execute success', async () => {
    const tag = 'home'
    const page = 1
    const URL_WINNER = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&api_key=4ae06b5c8911d4f6d7f5ed33f5c2da63&format=json&extras=date_taken,%20owner_name,%20tags,%20url_m&per_page=20&page=${page}`
    const returnRequest = {
      data: 'jsonFlickrApi({"photos":{ "photo": [{"id": 1}] }})'
    }

    const get = stub()
    get.withArgs(URL_WINNER).resolves(returnRequest)

    const axios = {
      get
    }

    const dispatch = stub()
    dispatch.withArgs({
      type: 'result/PHOTOS_LOADING',
      payload: {}
    })
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'result/PHOTOS_SUCESS',
      payload: {
        data: [{id: 1}]
      }
    }).returns(returnDispatch)
    expect(await getPhotosByTag(tag, page, {axios})(dispatch)).to.be.deep.equal(returnDispatch)
  })

  it('execute error', async () => {
    const tag = 'home'
    const page = 1
    const URL_WINNER = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&api_key=4ae06b5c8911d4f6d7f5ed33f5c2da63&format=json&extras=date_taken,%20owner_name,%20tags,%20url_m&per_page=20&page=${page}`


    const get = stub()
    get.withArgs(URL_WINNER).throws({name: 'Error get'})

    const axios = {
      get
    }

    const dispatch = stub()
    dispatch.withArgs({
      type: 'result/PHOTOS_LOADING',
      payload: {}
    })
    const returnError = 'return error'
    dispatch.withArgs({
      type: 'result/PHOTOS_ERROR',
      payload: {
        data: 'Error get'
      }
    }).returns(returnError)
    expect(await getPhotosByTag(tag, page, {axios})(dispatch)).to.be.deep.equal(returnError)
  })
  it('execute withou tag', async () => {
    const tag = ''
    expect(await getPhotosByTag(tag, null)(()=>{})).to.be.deep.equal(undefined)
  })
})
