import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducer from './src/reducers'
import App from './src/compontents/App'

import './static/todoStyle.css'

const store = createStore(reducer)
let elem = document.getElementById('root')
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    elem
)