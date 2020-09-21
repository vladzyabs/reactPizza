import React from 'react'
import {CountMinusSVG, CountPlusSVG, RemoveItemSVG} from '../SVG/SVG'
import {useDispatch} from 'react-redux'
import {removePizzaFromCart} from '../../redux/actions/cart'

type CartItemPropsType = {
   id: number
   imageURL: string
   name: string
   size: number
   type: string
   totalPrice: number
   totalCount: number
}

function CartItem(props: CartItemPropsType) {

   const dispatch = useDispatch()

   const onClickRemovePizza = () => {
      dispatch(removePizzaFromCart(props.id))
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
            <div className="button button--outline button--circle cart__item-count-minus">
               <CountMinusSVG/>
            </div>
            <b>{props.totalCount}</b>
            <div className="button button--outline button--circle cart__item-count-plus">
               <CountPlusSVG/>
            </div>
         </div>
         <div className="cart__item-price">
            <b>{props.totalPrice} ₽</b>
         </div>
         <div className="cart__item-remove" onClick={onClickRemovePizza}>
            <div className="button button--outline button--circle">
               <RemoveItemSVG/>
            </div>
         </div>
      </div>
   )
}

export default CartItem
