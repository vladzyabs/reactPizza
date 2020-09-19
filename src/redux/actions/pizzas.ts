import {PizzaType, SET_LOADING, SET_PIZZAS} from '../types/pizzas'
import {Dispatch} from 'redux'
import {pizzasAPI} from '../../api/api'
import {FilterSortType} from '../types/filters'

// actions

export const setPizzas = (pizzas: PizzaType[]) => ({
   type: SET_PIZZAS,
   payload: pizzas,
} as const)

export const setLoading = (value: boolean) => ({
   type: SET_LOADING,
   payload: value,
} as const)

export type ActionType
   = ReturnType<typeof setPizzas>
   | ReturnType<typeof setLoading>

//thunks

export const getPizzas = (category: number | null, sortBy: FilterSortType) =>
   async (dispatch: Dispatch) => {
      dispatch(setLoading(true))
      const res = await pizzasAPI.getPizzas(category, sortBy)
      dispatch(setPizzas(res.data))
      dispatch(setLoading(false))
   }
