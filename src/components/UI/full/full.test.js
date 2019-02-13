import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import EmptyComponent from './index'

describe('FullComponent', () => {
  it('check text', () => {
    const wrapper = shallow(<EmptyComponent />)
    const TEXT = 'All Itens loaded'
    expect(wrapper.find('TextInformation').text()).to.equal(TEXT)
  })
})
