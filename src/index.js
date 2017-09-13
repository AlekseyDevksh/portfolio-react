import './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from "react-redux";
import {Router, Route} from 'react-router'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Home from 'containers/home'
import About from 'containers/about'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Home} />
                <Route path='/about' component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

