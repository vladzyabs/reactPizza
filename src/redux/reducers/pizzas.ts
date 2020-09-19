import {ActionType} from '../actions/pizzas'
import {PizzaType} from '../types/pizzas'

const initialState = {
   pizzas: [] as PizzaType[],
   loading: false,
}

type InitialStateType = typeof initialState

const pizzas = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_PIZZAS':
         return {...state, pizzas: action.payload}
      case 'SET_LOADING':
         return {...state, loading: action.payload}
      default:
         return state
   }
}

export default pizzas
