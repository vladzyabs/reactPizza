import React from 'react'
import {FilterSortType} from '../../redux/types/filters'
import {useSelector, useDispatch} from 'react-redux'
import {AppRootStoreType} from '../../redux/store'
import {setSortBy} from '../../redux/actions/filters'

type SortPopupPropsType = {
   items: { type: FilterSortType, name: string }[]
   onClickItem?: () => void
}

function SortPopup({items}: SortPopupPropsType) {

   const activeItemType = useSelector<AppRootStoreType, FilterSortType>(state => state.filtersData.sortBy)
   const dispatch = useDispatch()

   React.useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick)
   }, [])

   const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
   const sortRef = React.useRef<HTMLDivElement>(null)

   const handleOutsideClick = (e: MouseEvent | any) => {
      if (!e.path.includes(sortRef.current)) {
         setVisiblePopup(false)
      }
   }

   const toggleVisiblePopup = () => {
      setVisiblePopup(prevState => !prevState)
   }

   const onSelectItem = (value: FilterSortType) => {
      dispatch(setSortBy(value))
      setVisiblePopup(false)
   }

   return (
      <div className="sort" ref={sortRef}>
         <div className="sort__label">
            <svg style={{transform: visiblePopup ? 'rotate(0deg)' : 'rotate(180deg)'}}
                 width="10"
                 height="6"
                 viewBox="0 0 10 6"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={toggleVisiblePopup}>{items[items.findIndex(i => i.type === activeItemType)].name}</span>
         </div>
         {
            visiblePopup && <div className="sort__popup">
                <ul>
                   {
                      items.map((item, index) =>
                         <li key={`${item.type}_${index}`}
                             className={items.findIndex(i => i.type === activeItemType) === index ? 'active' : ''}
                             onClick={() => onSelectItem(item.type)}>{item.name}</li>)
                   }
                </ul>
            </div>
         }
      </div>
   )
}

export default SortPopup
