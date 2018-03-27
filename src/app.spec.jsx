import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import App from './app'


Enzyme.configure({ adapter: new Adapter() })

describe('App Tests', () => {

    it('should render the component', () => {

        const wrapper = Enzyme.shallow(<App />)

        expect(wrapper.find('div').at(0).text()).toEqual('Hello World')
    })
})
