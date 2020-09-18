import {FilterSortType} from '../types/filters'
import {ActionType} from '../actions/filters'

const initialState = {
   category: 0,
   sortBy: 'popular' as FilterSortType,
}

type InitialStateType = typeof initialState

const filters = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_SORT_BY':
         return {...state, sortBy: action.payload}
      case 'SET_CATEGORY_BY':
         return {...state, category: action.payload}
      default:
         return {...state, sortBy: 'popular'}
   }
}

export default filters
