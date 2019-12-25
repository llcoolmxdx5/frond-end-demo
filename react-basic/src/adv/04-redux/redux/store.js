import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 中间件，可以异步事件
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

export default store
