import axios from 'axios'
import {PizzaType} from '../redux/types/pizzas'
import {FilterSortType} from '../redux/types/filters'

//npx json-server --watch public/db.json --port 3001

const instance = axios.create({
   baseURL: 'http://localhost:3001/',
})

export const pizzasAPI = {
   getPizzas: (category: number | null, sortBy: FilterSortType) =>
      instance.get<PizzaType[]>(
         `pizzas?${category !== null ? 'category=' + category : ''}&_sort=${sortBy}&order=asc`)
}