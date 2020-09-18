import axios from 'axios'
import {PizzaType} from '../redux/types/pizzas'

//npx json-server --watch public/db.json --port 3001

export const pizzasAPI = {
   getPizzas: () => axios.get<PizzaType[]>('http://localhost:3001/pizzas')
}
