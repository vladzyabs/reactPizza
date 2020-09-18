import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export type AppRootStoreType = ReturnType<typeof rootReducer>

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
