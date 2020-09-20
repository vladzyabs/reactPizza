import React from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoader} from '../../components'
import {PizzaType} from '../../redux/types/pizzas'
import {FilterSortType} from '../../redux/types/filters'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStoreType} from '../../redux/store'
import {setCategory, setSort} from '../../redux/actions/filters'
import {getPizzas} from '../../redux/actions/pizzas'
import {PizzaToCartType} from '../../redux/types/cart'
import {addPizzaToCart} from '../../redux/actions/cart'

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems: { type: FilterSortType, name: string }[] = [
   {type: 'popular', name: 'популярности'},
   {type: 'price', name: 'цене'},
   {type: 'name', name: 'алфавиту'},
]

function Home() {

   const pizzas = useSelector<AppRootStoreType, PizzaType[]>(state => state.pizzasData.pizzas)
   const loading = useSelector<AppRootStoreType, boolean>(state => state.pizzasData.loading)
   const category = useSelector<AppRootStoreType, number | null>(state => state.filtersData.category)
   const sortBy = useSelector<AppRootStoreType, FilterSortType>(state => state.filtersData.sortBy)
   const cart = useSelector<AppRootStoreType, any>(state => state.cartData.items)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(getPizzas(category, sortBy))
   }, [dispatch, category, sortBy])

   const onClickCategoryHandler = React.useCallback(
      (value: number | null) => dispatch(setCategory(value)),
      [dispatch],
   )

   const onClickSortHandler = React.useCallback(
      (value: FilterSortType) => dispatch(setSort(value)),
      [dispatch],
   )

   const onClickAddPizza = React.useCallback(
      (objPizza: PizzaToCartType) => dispatch(addPizzaToCart(objPizza)),
      [dispatch],
   )

   return (
      <div className="container">

         <div className="content__top">

            <Categories items={categoryItems} activeItem={category}
                        onClickItem={onClickCategoryHandler}/>

            <SortPopup items={sortItems} activeItem={sortBy}
                       onClickItem={onClickSortHandler}/>

         </div>

         <h2 className="content__title">Все пиццы</h2>

         <div className="content__items">
            {
               !loading
                  ? pizzas.map(pizza => <PizzaBlock key={pizza.id}
                                                    pizza={pizza}
                                                    addedCount={cart[pizza.id] ? cart[pizza.id].length : 0}
                                                    onClickAddPizza={onClickAddPizza}/>)
                  : Array(12)
                     .fill(0)
                     .map((_, i) => <PizzaLoader key={i}/>)
            }
         </div>

      </div>
   )
}

export default Home
