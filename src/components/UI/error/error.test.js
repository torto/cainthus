import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import EmptyComponent from './index'

describe('ErrorComponent', () => {
  it('check text', () => {
    const wrapper = shallow(<EmptyComponent />)
    const TEXT = 'Request Failed...'
    expect(wrapper.find('TextInformation').text()).to.equal(TEXT)
  })
})
