import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import EmptyComponent from './index'

describe('EmptyComponent', () => {
  it('Check text', () => {
    const wrapper = shallow(<EmptyComponent />)
    const TEXT = 'Use Search input to find some pictures.'
    expect(wrapper.find('TextInformation').text()).to.equal(TEXT)
  })
})
