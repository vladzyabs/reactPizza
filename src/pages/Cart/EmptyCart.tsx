import React from 'react'
import {NavLink} from 'react-router-dom'
import EmptyCartIMG from '../../assets/img/empty-cart.png'

function EmptyCart() {
   return (
      <div className="container container--cart">
         <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>
               Вероятней всего, вы не заказывали ещё пиццу.<br/>
               Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={EmptyCartIMG} alt="Empty cart"/>
            <NavLink to="/" className="button button--black">
               <span>Вернуться назад</span>
            </NavLink>
         </div>
      </div>
   )
}

export default EmptyCart
