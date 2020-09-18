import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../../components'
import {PizzaType} from '../../redux/types/pizzas'
import {FilterSortType} from '../../redux/types/filters'

type HomePropsType = {
   pizzas: PizzaType[]
}

function Home({pizzas}: HomePropsType) {

   const sort: {type: FilterSortType, name: string}[] = [
      {type: 'popular', name: 'популярности'},
      {type: 'price', name: 'цене'},
      {type: 'alphabet', name: 'алфавиту'},
   ]

   return (
      <div className="container">

         <div className="content__top">

            <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
            <SortPopup items={sort}/>

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
