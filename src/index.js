import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
const Root = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>  
)
import reducers from './reducers'
let store = createStore(reducers)

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'))