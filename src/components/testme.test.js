import React from 'react'
import { shallow } from 'enzyme'
import TestMe from './testme'


test('question component caption', () => {
  const testMe = shallow(<TestMe />)
  const span = testMe.find('span')

  // console.log(span.nodes)
  // console.log(span.prop('value'))
  expect(span.length).toEqual(1)
  expect(span.text()).toEqual('mama span')
})
