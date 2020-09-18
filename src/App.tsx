import React from 'react'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'
import {PizzaType} from './redux/types/pizzas'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStoreType} from './redux/store'
import {getPizzas} from './redux/actions/pizzas'


function App() {

   const pizzas = useSelector<AppRootStoreType, PizzaType[]>(state => state.pizzasData.pizzas)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(getPizzas())
   }, [dispatch])

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
