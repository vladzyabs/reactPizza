import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../../components'
import {PizzaType} from '../../redux/types/pizzas'
import {FilterSortType} from '../../redux/types/filters'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStoreType} from '../../redux/store'
import {setCategory, setSort} from '../../redux/actions/filters'

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems: { type: FilterSortType, name: string }[] = [
   {type: 'popular', name: 'популярности'},
   {type: 'price', name: 'цене'},
   {type: 'alphabet', name: 'алфавиту'},
]

function Home() {

   const pizzas = useSelector<AppRootStoreType, PizzaType[]>(state => state.pizzasData.pizzas)
   const dispatch = useDispatch()


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
               pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
            }
         </div>

      </div>
   )
}

export default Home
