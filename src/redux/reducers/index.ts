import {combineReducers} from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'

const rootReducer = combineReducers({
   filtersData: filtersReducer,
   pizzasData: pizzasReducer,
   cartData: cartReducer,
})

export default rootReducer
