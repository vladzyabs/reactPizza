export const SET_PIZZAS = 'SET_PIZZAS'
export const SET_LOADING = 'SET_LOADING'

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

export const availablePizzaTypes = ['тонокое', 'традиционное']
export const availablePizzaSizes = [26, 30, 40]
