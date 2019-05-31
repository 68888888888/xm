import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from './home'
import user from './user'
import find from './find'
import shop from './shop'
import buy from './buy'
import login from './login'
import register from './register'
const reducer = combineReducers({
    home,
    buy,
    find,
    shop,
    user,
    login,
    register
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store