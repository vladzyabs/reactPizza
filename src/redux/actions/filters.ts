import {FilterSortType, SET_CATEGORY_BY, SET_SORT_BY} from '../types/filters'

export const setSortBy = (value: FilterSortType) => ({
   type: SET_SORT_BY,
   payload: value,
} as const)

export const setCategoryBy = (value: number) => ({
   type: SET_CATEGORY_BY,
   payload: value,
} as const)

export type ActionType
   = ReturnType<typeof setSortBy>
   | ReturnType<typeof setCategoryBy>
