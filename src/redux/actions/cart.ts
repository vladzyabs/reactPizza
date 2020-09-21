import {PizzaToCartType, ADD_PIZZA, REMOVE_PIZZA, SET_TOTAL_COUNT, SET_TOTAL_PRICE, CLEAR_CART} from '../types/cart'

export const addPizzaToCart = (objPizza: PizzaToCartType) => ({
   type: ADD_PIZZA,
   payload: {...objPizza},
} as const)

export const removePizzaFromCart = (pizzaID: number) => ({
   type: REMOVE_PIZZA,
   payload: pizzaID,
} as const)

export const clearCart = () => ({
   type: CLEAR_CART,
} as const)

export const setTotalCount = () => ({
   type: SET_TOTAL_COUNT,
} as const)

export const setTotalPrice = () => ({
   type: SET_TOTAL_PRICE,
} as const)

export type ActionType
   = ReturnType<typeof addPizzaToCart>
   | ReturnType<typeof removePizzaFromCart>
   | ReturnType<typeof clearCart>
   | ReturnType<typeof setTotalCount>
   | ReturnType<typeof setTotalPrice>
