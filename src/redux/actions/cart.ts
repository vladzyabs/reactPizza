import {PizzaToCartType, ADD_PIZZA, REMOVE_GROUP_PIZZAS, CLEAR_CART, PLUS_PIZZA, MINUS_PIZZA} from '../types/cart'

export const addPizzaToCart = (objPizza: PizzaToCartType) => ({
   type: ADD_PIZZA,
   payload: {...objPizza},
} as const)

export const removePizzaFromCart = (pizzaID: number) => ({
   type: REMOVE_GROUP_PIZZAS,
   payload: pizzaID,
} as const)

export const clearCart = () => ({
   type: CLEAR_CART,
} as const)

export const plusPizza = (pizzaID: number) => ({
   type: PLUS_PIZZA,
   payload: pizzaID
} as const)

export const minusPizza = (pizzaID: number) => ({
   type: MINUS_PIZZA,
   payload: pizzaID
} as const)

export type ActionType
   = ReturnType<typeof addPizzaToCart>
   | ReturnType<typeof removePizzaFromCart>
   | ReturnType<typeof clearCart>
   | ReturnType<typeof plusPizza>
   | ReturnType<typeof minusPizza>
