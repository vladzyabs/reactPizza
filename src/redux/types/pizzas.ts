export const SET_PIZZAS = 'SET_PIZZAS'
export const SET_LOADED = 'SET_LOADED'

export type PizzaType = {
   id: number
   imageUrl: string
   name: string
   types: number[]
   sizes: number[]
   price: number
   category: number
   rating: number
}
