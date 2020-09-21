import React from 'react'
import classNames from 'classnames'
import {availablePizzaSizes, availablePizzaTypes, PizzaType} from '../../redux/types/pizzas'
import {Button} from '../index'
import {PizzaToCartType} from '../../redux/types/cart'

type PizzaBlockPropsType = {
   pizza: PizzaType
   addedCount: number
   onClickAddPizza: (objPizza: PizzaToCartType) => void
}

function PizzaBlock(props: PizzaBlockPropsType) {

   const [activeType, setActiveType] = React.useState<number>(props.pizza.types[0])
   const [activeSize, setActiveSize] = React.useState<number>(props.pizza.sizes[0])

   const onSelectType = (type: number) => {
      setActiveType(type)
   }

   const onSelectSize = (size: number) => {
      setActiveSize(size)
   }

   const addPizzaHandler = () => {
      const objPizza: PizzaToCartType = {
         id: props.pizza.id,
         name: props.pizza.name,
         imageUrl: props.pizza.imageUrl,
         price: props.pizza.price,
         size: activeSize,
         type: activeType,
      }
      props.onClickAddPizza(objPizza)
   }

   return (
      <div className="pizza-block">
         <img className="pizza-block__image"
              src={props.pizza.imageUrl}
              alt="Pizza"/>
         <h4 className="pizza-block__title">{props.pizza.name}</h4>
         <div className="pizza-block__customization">
            <div className="pizza-block__selector">
               <ul>
                  {
                     availablePizzaTypes.map((type, index) =>
                        <li key={type}
                            className={classNames({
                               active: activeType === index,
                               disable: !props.pizza.types.includes(index),
                            })}
                            onClick={() => onSelectType(index)}>{type}</li>)
                  }
               </ul>
               <ul>
                  {
                     availablePizzaSizes.map((size, index) =>
                        <li key={size}
                            className={classNames({
                               active: activeSize === size,
                               disable: !props.pizza.sizes.includes(size)
                            })}
                            onClick={() => onSelectSize(size)}>{size} см.</li>,
                     )
                  }
               </ul>
            </div>
            <div className="pizza-block__bottom">
               <div className="pizza-block__price">от {props.pizza.price} ₽</div>
               <Button classes="button--add" outline onClick={addPizzaHandler}>
                  <svg width="12"
                       height="12"
                       viewBox="0 0 12 12"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                     />
                  </svg>
                  <span>Добавить</span>
                  {props.addedCount ? <i>{props.addedCount}</i> : ''}
               </Button>
            </div>
         </div>
      </div>
   )
}

export default React.memo(PizzaBlock)
