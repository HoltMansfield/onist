import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme';
import reducer from '../reducers'
import Question from './question'
import { addChild } from '../actions'

const store = createStore(reducer)
const getComponentUnderTest = () => {
  return (
      <Provider store={store}>
        <Question />
      </Provider>
    )
}

test('question component rendering', () => {
  const component = renderer.create(getComponentUnderTest(),)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('question component caption with no children', () => {
  const wrapper = mount(getComponentUnderTest())
  const caption = wrapper.find(Question).find('div').find('span').first()

  expect(caption.text()).toEqual('Do you have any children?')
})

test('question component caption with 1 or more children', () => {
  const wrapper = mount(getComponentUnderTest())
  store.dispatch(addChild({}))
  const caption = wrapper.find(Question).find('div').find('span').first()

  expect(caption.text()).toEqual('Do you have any other children?')
})

// test('question component dispatches addChild action', () => {
//   const question = mount(getComponentUnderTest()).find(Question)
//
//   const spy = jest.spyOn(question.props, 'dispatch')
//   const yesButton = question.find('div').find('input').first()
//   yesButton.simulate('click')
//   expect(spy).toHaveBeenCalled()
// })
// test('question component dispatches addChild action', () => {
//   const question = mount(getComponentUnderTest()).find(Question)
//   expect(question.length).toEqual(1)
//   const spy = jest.spyOn(question.instance(), 'handleYesClicked')
//   const yesButton = question.find('div').find('input').first()
//   yesButton.simulate('click')
//   expect(spy).toHaveBeenCalled()
// })

test('question component dispatches addChild action', () => {
  const wrapper = mount(getComponentUnderTest())
  const question = wrapper.find(Question)
  expect(question.length).toEqual(1)
  const spy = jest.spyOn(question.instance(), 'handleYesClicked')
  wrapper.update()
  const yesButton = question.find('div').find('input').first()
  yesButton.simulate('click')
  expect(spy).toHaveBeenCalled()
})
