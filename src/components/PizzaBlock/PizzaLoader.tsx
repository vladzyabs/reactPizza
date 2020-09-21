import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaLoader = (props: any) => (
   <ContentLoader
      className="pizza-block"
      speed={1}
      width={280}
      height={480}
      viewBox="0 0 280 460"
      backgroundColor="#ededed"
      foregroundColor="#e6e6e6"
      {...props}
   >
      <circle cx="130" cy="130" r="130"/>
      <rect x="0" y="270" rx="6" ry="6" width="260" height="30"/>
      <rect x="0" y="310" rx="6" ry="6" width="260" height="85"/>
      <rect x="134" y="405" rx="25" ry="25" width="130" height="45"/>
      <rect x="0" y="415" rx="6" ry="6" width="88" height="30"/>
   </ContentLoader>
)

export default PizzaLoader
