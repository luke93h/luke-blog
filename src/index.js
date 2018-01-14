import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>  
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))