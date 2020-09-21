import React from 'react'
import {CartItem} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {clearCart} from '../../redux/actions/cart'
import {AppRootStoreType} from '../../redux/store'
import {CartSVG, ComeBackArrowSVG, DeleteBasketSVG} from '../../components/SVG/SVG'
import {ItemsCartType} from '../../redux/types/cart'
import EmptyCart from './EmptyCart'
import {availablePizzaTypes} from '../../redux/types/pizzas'

function Cart() {

   const items = useSelector<AppRootStoreType, ItemsCartType>(state => state.cartData.items)
   const totalCount = useSelector<AppRootStoreType, number>(state => state.cartData.totalCount)
   const totalPrice = useSelector<AppRootStoreType, number>(state => state.cartData.totalPrice)
   const dispatch = useDispatch()

   const onClickClearCart = () => {
      dispatch(clearCart())
   }

   const groupPizzas = Object.keys(items).map(key => {
      return items[Number(key)][0]
   })

   const isEmpty = (obj: Object) => {
      for (let key in obj) {
         return false
      }
      return true
   }

   if (isEmpty(items)) {
      return <EmptyCart/>
   }

   return (
      <div className="container container--cart">
         <div className="cart">

            <div className="cart__top">
               <h2 className="content__title">
                  <CartSVG/>
                  Корзина
               </h2>
               <div className="cart__clear" onClick={onClickClearCart}>
                  <DeleteBasketSVG/>
                  <span>Очистить корзину</span>
               </div>
            </div>

            <div className="content__items">

               {
                  groupPizzas.map((pizza, index) =>
                     <CartItem key={`${index}_${pizza.size}_${pizza.type}_${pizza.name}`}
                               imageURL={pizza.imageUrl}
                               name={pizza.name}
                               size={pizza.size}
                               type={availablePizzaTypes[pizza.type]}/>)
               }

            </div>

            <div className="cart__bottom">
               <div className="cart__bottom-details">
                  <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                  <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
               </div>
               <div className="cart__bottom-buttons">
                  <a href="/" className="button button--outline button--add go-back-btn">
                     <ComeBackArrowSVG/>
                     <span>Вернуться назад</span>
                  </a>
                  <div className="button pay-btn">
                     <span>Оплатить сейчас</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
