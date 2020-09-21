import {PizzaToCartType, ADD_PIZZA, REMOVE_GROUP_PIZZA, CLEAR_CART} from '../types/cart'

export const addPizzaToCart = (objPizza: PizzaToCartType) => ({
   type: ADD_PIZZA,
   payload: {...objPizza},
} as const)

export const removePizzaFromCart = (pizzaID: number) => ({
   type: REMOVE_GROUP_PIZZA,
   payload: pizzaID,
} as const)

export const clearCart = () => ({
   type: CLEAR_CART,
} as const)

export type ActionType
   = ReturnType<typeof addPizzaToCart>
   | ReturnType<typeof removePizzaFromCart>
   | ReturnType<typeof clearCart>
