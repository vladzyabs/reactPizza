import axios from 'axios'
import {PizzaType} from '../redux/types/pizzas'

export const pizzasAPI = {
   getPizzas: () => axios.get<{ pizzas: PizzaType[] }>('http://localhost:3000/db.json')
}