import { ContentBox } from './content'
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test('without titleBox', () => {
  const tree = renderer.create(<ContentBox />).toJSON()
  expect(tree).toHaveStyleRule('background', '#E9E9E9')
})
test('with titleBox', () => {
  const tree = renderer.create(<ContentBox titleBox="true"/>).toJSON()
  expect(tree).toHaveStyleRule('background', '#B9BBBD')
})
