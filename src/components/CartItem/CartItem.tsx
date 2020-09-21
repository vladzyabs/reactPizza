import React from 'react'
import {CountMinusSVG, CountPlusSVG, RemoveItemSVG} from '../SVG/SVG'
import {Button} from '../index'

type CartItemPropsType = {
   id: number
   imageURL: string
   name: string
   size: number
   type: string
   totalPrice: number
   totalCount: number
   onClickRemovePizza: (id: number, name: string) => void
   onClickPlusPizza: (id: number) => void
   onClickMinusPizza: (id: number) => void
}

function CartItem(props: CartItemPropsType) {

   const handleRemovePizza = () => {
      props.onClickRemovePizza(props.id, props.name)
   }

   const handlePlusPizza = () => {
      props.onClickPlusPizza(props.id)
   }

   const handleMinusPizza = () => {
      props.onClickMinusPizza(props.id)

   }

   return (
      <div className="cart__item">
         <div className="cart__item-img">
            <img
               className="pizza-block__image"
               src={props.imageURL}
               alt="Pizza"
            />
         </div>
         <div className="cart__item-info">
            <h3>{props.name}</h3>
            <p>{props.type} тесто, {props.size} см.</p>
         </div>
         <div className="cart__item-count">
            <Button classes="button--circle cart__item-count-minus"
                    outline onClick={handleMinusPizza} disabled={props.totalCount <=1}>
               <CountMinusSVG/>
            </Button>
            <b>{props.totalCount}</b>
            <Button classes="button--circle cart__item-count-plus"
                    outline onClick={handlePlusPizza}>
               <CountPlusSVG/>
            </Button>
         </div>
         <div className="cart__item-price">
            <b>{props.totalPrice} ₽</b>
         </div>
         <div className="cart__item-remove">
            <Button classes="button--circle" outline onClick={handleRemovePizza}>
               <RemoveItemSVG/>
            </Button>
         </div>
      </div>
   )
}

export default CartItem
