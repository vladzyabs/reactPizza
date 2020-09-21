export const ADD_PIZZA = 'cart/ADD_PIZZA'
export const CLEAR_CART = 'cart/CLEAR_CART'
export const REMOVE_GROUP_PIZZA = 'cart/REMOVE_GROUP_PIZZA'
export const PLUS_PIZZA = 'cart/PLUS_PIZZA'
export const MINUS_PIZZA = 'cart/MINUS_PIZZA'

export type PizzaToCartType = {
   id: number
   name: string
   imageUrl: string
   price: number
   size: number
   type: number
}

export type ItemsCartType = {
   [key: number]: {
      items: PizzaToCartType[]
      totalPrice: number
   }
}
