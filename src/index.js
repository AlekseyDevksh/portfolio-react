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
import Home from 'containers/pages/home'
import About from 'containers/pages/about'
import Resume from 'containers/pages/resume'
import Portfolio from 'containers/pages/portfolio'
import Contacts from 'containers/pages/contacts'

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
                <Route path='/resume' component={Resume}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/contacts' component={Contacts}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

