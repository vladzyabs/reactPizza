import {ActionType} from '../actions/cart'
import {ItemsCartType} from '../types/cart'

const initialState = {
   items: {} as ItemsCartType , // the key is pizza id : the value is the number of pizzas
   totalPrice: 0,
   totalCount: 0,
}

type InitialStateType = typeof initialState

const cartReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'cart/ADD_PIZZA':
         return {
            ...state,
            items: {
               ...state.items,
               [action.payload.id]: !state.items[action.payload.id]
                  ? [action.payload]
                  : [...state.items[action.payload.id], action.payload],
            },
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.payload.price,
         }
      case 'cart/REMOVE_PIZZA':
         return {...state}
      case 'cart/CLEAR_CART':
         return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0,
         }
      default:
         return state
   }
}

export default cartReducer
