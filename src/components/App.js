 import React, { Component } from 'react'
 import { createStore } from 'redux'
 import { Provider } from 'react-redux'

import { reducer } from '../reducer'
import Todo from './Todo'

const store = createStore(reducer)

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Todo/>
            </Provider>           
        )
    }
}
