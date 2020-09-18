import React, {useState} from 'react'

type CategoriesPropsType = {
   items: string[]
   onClickItem: (value: number | null) => void
}

function Categories({items, onClickItem}: CategoriesPropsType) {

   const [activeItem, setActiveItem] = useState<string>('')

   const onSelectItem = (item: string, index: number | null) => {
      setActiveItem(item)
      onClickItem(index)
   }

   return (
      <div className="categories">
         <ul>
            <li className={!activeItem ? 'active' : ''} onClick={() => onSelectItem('', null)}>Все</li>
            {
               items.map((item, index) =>
                  <li key={`${item}_${index}`}
                      className={activeItem === item ? 'active' : ''}
                      onClick={() => onSelectItem(item, index)}>{item}</li>)
            }
         </ul>
      </div>
   )
}

export default React.memo(Categories)
