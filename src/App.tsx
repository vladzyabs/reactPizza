import React from 'react'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'
import {useDispatch} from 'react-redux'
import {getPizzas} from './redux/actions/pizzas'

function App() {

   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(getPizzas())
   }, [dispatch])

   return (
      <div className="App">
         <div className="wrapper">
            <Header/>
            <div className="content">
               <Route exact path={'/'} component={Home}/>
               <Route path={'/cart'} component={Cart}/>
            </div>
         </div>
      </div>
   )
}

export default App
