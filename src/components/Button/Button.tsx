import React from 'react'
import classNames from 'classnames'

type ButtonPropsType = {
   children: any
   outline?: boolean
   classes?: string
   onClick?: () => void
}

function Button(props: ButtonPropsType) {

   const onClickHandle = () => props.onClick && props.onClick()

   return (
      <button onClick={onClickHandle}
              className={
                 classNames('button',
                    {'button--outline': props.outline},
                    props.classes,
                 )}>
         {props.children}
      </button>
   )
}

export default Button
