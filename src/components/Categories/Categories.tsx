import React from 'react'

type CategoriesPropsType = {
   items: string[]
   activeItem: number | null
   onClickItem: (value: number | null) => void
}

function Categories({items, activeItem, onClickItem}: CategoriesPropsType) {

   const onSelectItem = (item: string, index: number | null) => {
      onClickItem(index)
   }

   return (
      <div className="categories">
         <ul>
            <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem('', null)}>Все</li>
            {
               items.map((item, index) =>
                  <li key={`${item}_${index}`}
                      className={activeItem === index ? 'active' : ''}
                      onClick={() => onSelectItem(item, index)}>{item}</li>)
            }
         </ul>
      </div>
   )
}

export default React.memo(Categories)
