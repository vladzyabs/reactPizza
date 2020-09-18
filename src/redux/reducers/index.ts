import {combineReducers} from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
   filtersData: filtersReducer,
   pizzasData: pizzasReducer,
})

export default rootReducer
