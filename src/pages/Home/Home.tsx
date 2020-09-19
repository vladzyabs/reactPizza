import React from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoader} from '../../components'
import {PizzaType} from '../../redux/types/pizzas'
import {FilterSortType} from '../../redux/types/filters'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStoreType} from '../../redux/store'
import {setCategory, setSort} from '../../redux/actions/filters'
import {getPizzas} from '../../redux/actions/pizzas'

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems: { type: FilterSortType, name: string }[] = [
   {type: 'popular', name: 'популярности'},
   {type: 'price', name: 'цене'},
   {type: 'alphabet', name: 'алфавиту'},
]

function Home() {

   const pizzas = useSelector<AppRootStoreType, PizzaType[]>(state => state.pizzasData.pizzas)
   const isLoaded = useSelector<AppRootStoreType, boolean>(state => state.pizzasData.isLoaded)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(getPizzas())
   }, [dispatch])

   const onClickCategoryHandler = React.useCallback(
      (value: number | null) => dispatch(setCategory(value)),
      [dispatch],
   )

   const onClickSortHandler = React.useCallback(
      (value: FilterSortType) => dispatch(setSort(value)),
      [dispatch],
   )

   return (
      <div className="container">

         <div className="content__top">

            <Categories items={categoryItems}
                        onClickItem={onClickCategoryHandler}/>

            <SortPopup items={sortItems}
                       onClickItem={onClickSortHandler}/>

         </div>

         <h2 className="content__title">Все пиццы</h2>

         <div className="content__items">
            {
               !isLoaded
                  ? pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
                  : Array(10)
                     .fill(0)
                     .map((el, i) => <div key={i} className="pizza-block"><PizzaLoader/></div>)
            }
         </div>

      </div>
   )
}

export default Home
