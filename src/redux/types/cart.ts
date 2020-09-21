export const ADD_PIZZA = 'cart/ADD_PIZZA'
export const REMOVE_PIZZA = 'cart/REMOVE_PIZZA'
export const SET_TOTAL_COUNT = 'cart/SET_TOTAL_COUNT'
export const SET_TOTAL_PRICE = 'cart/SET_TOTAL_PRICE'

export type PizzaToCartType= {
   id: number
   name: string
   imageUrl: string
   price: number
   size: number
   type: number
}