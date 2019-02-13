import React from 'react'
import { expect } from 'chai'
import { mock } from 'sinon'
import { shallow } from 'enzyme'

import { HomeComponent, mapStateToProps, mapDispatchToProps } from './home'

describe('HomeComponent', () => {
  it('execute empty value', async () => {
    const options = {
      getPhotosByTag: mock('getPhotosByTag'),
      cleanRequestPhotos: mock('cleanRequestPhotos'),
      photos: {data: []}
    }
    const wrapper = shallow(<HomeComponent {...options} />)
    expect(wrapper.find('EmptySearchComponent').exists()).to.be.true
  })
  it('execute with values load', async () => {
    const options = {
      getPhotosByTag: mock('getPhotosByTag'),
      cleanRequestPhotos: mock('cleanRequestPhotos'),
      photos: {data: [{
        id: '1',
        datetaken: '',
        owner: '123',
        ownername: 'Torto',
        tags: 'home art',
        title: 'Title',
        url_m: 'https://aa.com/a.jpg'
      }]}
    }
    const wrapper = shallow(<HomeComponent {...options} />)
    wrapper.setState({tag: 'home'})
    expect(wrapper.find('Styled(StackGrid)').exists()).to.be.true
  })
  it('execute loading', async () => {
    const options = {
      getPhotosByTag: mock('getPhotosByTag'),
      cleanRequestPhotos: mock('cleanRequestPhotos'),
      photos: {data: [], loading: true}
    }
    const wrapper = shallow(<HomeComponent {...options} />)
    wrapper.setState({tag: 'home'})
    expect(wrapper.find('Styled(CirclesToRhombusesSpinner)').exists()).to.be.true
  })
  it('execute with values load and full page', async () => {
    const options = {
      getPhotosByTag: mock('getPhotosByTag'),
      cleanRequestPhotos: mock('cleanRequestPhotos'),
      photos: {data: [{
        id: '1',
        datetaken: '',
        owner: '123',
        ownername: 'Torto',
        tags: 'home art',
        title: 'Title',
        url_m: 'https://aa.com/a.jpg'
      }]}
    }
    const wrapper = shallow(<HomeComponent {...options} />)
    wrapper.setState({tag: 'home', page: 50})
    expect(wrapper.find('FullLoadComponent').exists()).to.be.true
  })
  it('execute with values load and full page', async () => {
    const options = {
      getPhotosByTag: mock('getPhotosByTag'),
      cleanRequestPhotos: mock('cleanRequestPhotos'),
      photos: {data: [], error: 'error'}
    }
    const wrapper = shallow(<HomeComponent {...options} />)
    wrapper.setState({tag: 'home'})
    expect(wrapper.find('ErrorRequestComponent').exists()).to.be.true
  })
  it('execute inner functions', async () => {
    const options = {
      getPhotosByTag: mock('getPhotosByTag'),
      cleanRequestPhotos: mock('cleanRequestPhotos'),
      photos: {data: [{
        id: '1',
        datetaken: '',
        owner: '123',
        ownername: 'Torto',
        tags: 'home art',
        title: 'Title',
        url_m: 'https://aa.com/a.jpg'
      }]}
    }
    const wrapper = shallow(<HomeComponent {...options} />)
    wrapper.instance().changeTagInput({target: { value: 'home art' }})
    wrapper.instance().handleChangeTag()
    options.cleanRequestPhotos.verify()
    options.getPhotosByTag.verify()

    const state = wrapper.state()
    expect(state.page).to.be.equal(1)
    expect(state.tag).to.be.equal('home,art')
  })
  it('execute maps methods', () => {
    mapStateToProps({
      photos: {
        photos: []
      }
    })
    mapDispatchToProps({})
  })
})
