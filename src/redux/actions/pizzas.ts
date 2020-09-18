import {PizzaType, SET_LOADED, SET_PIZZAS} from '../types/pizzas'
import {Dispatch} from 'redux'
import {pizzasAPI} from '../../api/api'

// actions

export const setPizzas = (pizzas: PizzaType[]) => ({
   type: SET_PIZZAS,
   payload: pizzas,
} as const)

export const setLoaded = (value: boolean) => ({
   type: SET_LOADED,
   payload: value,
} as const)

export type ActionType
   = ReturnType<typeof setPizzas>
   | ReturnType<typeof setLoaded>

//thunks

export const getPizzas = () =>
   async (dispatch: Dispatch) => {
      const res = await pizzasAPI.getPizzas()
      dispatch(setPizzas(res.data))
   }
