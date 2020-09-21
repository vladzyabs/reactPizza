import React from 'react'
import {CartItem} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {clearCart} from '../../redux/actions/cart'
import {AppRootStoreType} from '../../redux/store'
import {CartSVG, ComeBackArrowSVG, DeleteBasketSVG} from '../../components/SVG/SVG'

function Cart() {

   const totalCount = useSelector<AppRootStoreType, number>(state => state.cartData.totalCount)
   const totalPrice = useSelector<AppRootStoreType, number>(state => state.cartData.totalPrice)
   const dispatch = useDispatch()

   const onClickClearCart = () => {
      dispatch(clearCart())
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
               <CartItem/>
               <CartItem/>
               <CartItem/>
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
