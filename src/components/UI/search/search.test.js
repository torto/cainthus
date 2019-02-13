import React from 'react'
import { shallow, mount } from 'enzyme'
import { mock } from 'sinon'
import Search from './search'

describe('SearchComponent', () => {
  it('execute click button', async () => {
    const options = {
      onChangeInput: mock('onChangeInput'),
      handleClick: mock('handleClick')
    }
    const wrapper = shallow(<Search {...options} />)
    wrapper.find('Button').simulate('click')
    options.handleClick.verify()
  })
  it('execute change Input', async () => {
    const options = {
      onChangeInput: mock('onChangeInput'),
      handleClick: mock('handleClick')
    }
    const wrapper = shallow(<Search {...options} />)
    const input = wrapper.find('Input')
    input.simulate('change', {target: {value: 'My new value'}})
    options.onChangeInput.verify()
  })
  it('execute change Inputwith enter', async () => {
    const options = {
      onChangeInput: mock('onChangeInput'),
      handleClick: mock('handleClick')
    }
    const wrapper = mount(<Search {...options} />)
    const input = wrapper.find('Input')
    input.simulate('keypress', {key: 'Enter'})
    input.simulate('keypress', {key: 'Space'})
    options.handleClick.verify()
  })
})
