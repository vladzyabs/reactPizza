import {ActionType} from '../actions/pizzas'
import {PizzaType} from '../types/pizzas'

const initialState = {
   pizzas: [] as PizzaType[],
   isLoaded: false,
}

type InitialStateType = typeof initialState

const pizzas = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_PIZZAS':
         return {...state, pizzas: action.payload}
      case 'SET_LOADED':
         return {...state, isLoaded: action.payload}
      default:
         return state
   }
}

export default pizzas
