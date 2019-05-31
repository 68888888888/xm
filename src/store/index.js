import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from './home'
import user from './user'
import find from './find'
import shop from './shop'
import buy from './buy'
const reducer = combineReducers({
    home,
    buy,
    find,
    shop,
    user
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store