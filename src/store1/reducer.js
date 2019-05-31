import {combineReducers} from 'redux'


import foodReducer from '../pages/find/reducer'

var reducer = combineReducers({

	food:foodReducer,
	
})

export default reducer;