import React, {useState} from 'react'

type CategoriesPropsType = {
   items: string[]
}

function Categories({items}: CategoriesPropsType) {

   const [activeItem, setActiveItem] = useState<string>('')

   const onSelectItem = (item: string) => {
      setActiveItem(item)
   }

   return (
      <div className="categories">
         <ul>
            <li className={!activeItem ? 'active' : ''} onClick={() => setActiveItem('')}>Все</li>
            {
               items.map((item, index) =>
                  <li key={`${item}_${index}`}
                      className={activeItem === item ? 'active' : ''}
                      onClick={() => onSelectItem(item)}>{item}</li>)
            }
         </ul>
      </div>
   )
}

export default Categories
