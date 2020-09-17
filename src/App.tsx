import React from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import {Header} from './components'
import {Home, Cart} from './pages'

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

function App() {

   const [pizzas, setPizzas] = React.useState<PizzaType[]>([])

   React.useEffect(() => {
      axios.get<{pizzas: PizzaType[]}>('http://localhost:3000/db.json')
         .then(res => setPizzas(res.data.pizzas))
   }, [])

   return (
      <div className="App">
         <div className="wrapper">
            <Header/>
            <div className="content">
               <Route exact path={'/'} render={() => <Home pizzas={pizzas}/>}/>
               <Route path={'/cart'} component={Cart}/>
            </div>
         </div>
      </div>
   )
}

export default App
