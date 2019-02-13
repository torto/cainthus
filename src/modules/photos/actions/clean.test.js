import { mock } from 'sinon'

const { cleanRequestPhotos } = require('./clean')

describe('Clean Action', () => {
  it('execute success', async () => {
    const dispatch = mock()
    dispatch.withArgs({
      type: 'result/PHOTOS_CLEAN',
      payload: {}
    })

    cleanRequestPhotos()(dispatch)
    dispatch.verify()
  })
})
