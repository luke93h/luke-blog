import { combineReducers } from 'redux'
import { todo } from './reducers/todo.js'

const reducers = combineReducers({
    todo
})
export default reducers