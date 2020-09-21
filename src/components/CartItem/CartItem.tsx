import React from 'react'
import {CountMinusSVG, CountPlusSVG, RemoveItemSVG} from '../SVG/SVG'

type CartItemPropsType = {
   imageURL: string
   name: string
   size: number
   type: string
}

function CartItem(props: CartItemPropsType) {
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
            <div className="button button--outline button--circle cart__item-count-minus">
               <CountMinusSVG/>
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
               <CountPlusSVG/>
            </div>
         </div>
         <div className="cart__item-price">
            <b>770 ₽</b>
         </div>
         <div className="cart__item-remove">
            <div className="button button--outline button--circle">
               <RemoveItemSVG/>
            </div>
         </div>
      </div>
   )
}

export default CartItem
