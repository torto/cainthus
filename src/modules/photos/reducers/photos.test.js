import { expect } from 'chai'

const photos = require('./photos')

describe('Results Reducer', () => {
  it('execute success', () => {
    const values = {
      type: 'result/PHOTOS_SUCESS',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      data: values.payload.data,
      loading: false,
      error: null
    }
    expect(photos.default (undefined, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute error', async () => {
    const values = {
      type: 'result/PHOTOS_ERROR',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      error: values.payload.data,
      loading: false,
    }
    expect(photos.default (null, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute loading', async () => {
    const values = {
      type: 'result/PHOTOS_LOADING'
    }

    const valuesReturn = {
      error: '',
      loading: true
    }
    expect(photos.default (null, values)).to.be.deep.equal(valuesReturn)
  })
  it('execute clean', async () => {
    const values = {
      type: 'result/PHOTOS_CLEAN'
    }

    const valuesReturn = {
      data: [],
      loading: false,
      error: null
    }
    expect(photos.default (null, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute default', async () => {
    const values = {
      type: 'default',
    }
    expect(photos.default ({}, values)).to.be.deep.equal({})
  })
})
