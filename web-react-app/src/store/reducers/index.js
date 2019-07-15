import { combineReducers } from 'redux'
import cartsReducer from './cartsReducer'
import flagReducer from './flagReducer'

const rootReducers = combineReducers({
    cartsReducer,
    flagReducer
});

export default rootReducers;