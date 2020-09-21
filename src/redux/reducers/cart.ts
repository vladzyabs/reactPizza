import {ActionType} from '../actions/cart'
import {ItemsCartType} from '../types/cart'

const initialState = {
   pizzasCart: {} as ItemsCartType, // the key is pizza id : the value is the number of pizzas
   totalPrice: 0,
   totalCount: 0,
}

type InitialStateType = typeof initialState

const getTotalPrice = (arr: any[]) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'cart/ADD_PIZZA':
         const currentPizzaItems = !state.pizzasCart[action.payload.id]
            ? [action.payload]
            : [...state.pizzasCart[action.payload.id].items, action.payload]
         const newItems = {
            ...state.pizzasCart,
            [action.payload.id]: {
               items: currentPizzaItems,
               totalPrice: getTotalPrice(currentPizzaItems),
            },
         }
         return {
            ...state,
            pizzasCart: newItems,
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.payload.price,
         }
      case 'cart/REMOVE_GROUP_PIZZAS':
         const pizzas = {...state.pizzasCart}
         delete pizzas[action.payload]
         return {
            ...state,
            pizzasCart: pizzas,
            totalCount: state.totalCount - state.pizzasCart[action.payload].items.length,
            totalPrice: state.totalPrice - state.pizzasCart[action.payload].totalPrice,
         }
      case 'cart/CLEAR_CART':
         return {
            ...state,
            pizzasCart: {},
            totalPrice: 0,
            totalCount: 0,
         }
      default:
         return state
   }
}

export default cartReducer
