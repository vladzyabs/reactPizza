import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import EmptyCart from './EmptyCart'
import {CartItem} from '../../components'
import {CartSVG, ComeBackArrowSVG, DeleteBasketSVG} from '../../components/SVG/SVG'
import {clearCart, removePizzaFromCart} from '../../redux/actions/cart'
import {AppRootStoreType} from '../../redux/store'
import {ItemsCartType} from '../../redux/types/cart'
import {availablePizzaTypes} from '../../redux/types/pizzas'

function Cart() {

   const pizzasCart = useSelector<AppRootStoreType, ItemsCartType>(state => state.cartData.pizzasCart)
   const totalCount = useSelector<AppRootStoreType, number>(state => state.cartData.totalCount)
   const totalPrice = useSelector<AppRootStoreType, number>(state => state.cartData.totalPrice)
   const dispatch = useDispatch()

   const onClickClearCart = () => {
      if (window.confirm('Вы действительно хотите очистить корзину?')) {
         dispatch(clearCart())
      }
   }

   const onClickRemovePizza = (id: number, name: string) => {
      if (window.confirm(`Вы действительно хотите удалить из корзины пиццу: ${name}`)) {
         dispatch(removePizzaFromCart(id))
      }
   }

   const groupPizzas = Object.keys(pizzasCart).map(key => {
      return pizzasCart[Number(key)].items[0]
   })

   if (!totalCount) {
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
                               id={pizza.id}
                               imageURL={pizza.imageUrl}
                               name={pizza.name}
                               size={pizza.size}
                               type={availablePizzaTypes[pizza.type]}
                               totalPrice={pizzasCart[pizza.id].totalPrice}
                               totalCount={pizzasCart[pizza.id].items.length}
                               onClickRemovePizza={onClickRemovePizza}/>)
               }

            </div>

            <div className="cart__bottom">
               <div className="cart__bottom-details">
                  <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                  <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
               </div>
               <div className="cart__bottom-buttons">
                  <NavLink to="/" className="button button--outline button--add go-back-btn">
                     <ComeBackArrowSVG/>
                     <span>Вернуться назад</span>
                  </NavLink>
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
