import {combineReducers, createStore} from 'redux'
import filters from './reducers/filters'

const rootReducer = combineReducers({
   filters,
})

export type AppRootStoreType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
