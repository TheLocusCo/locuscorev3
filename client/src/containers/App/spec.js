import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'

//import Actions from '../../redux/actions'

import { App } from './'

const props = {}

describe('<App />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <App {...props} />
    )
    expect(renderedComponent.is('div')).toEqual(true)
  })
})
