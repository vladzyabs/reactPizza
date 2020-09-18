import {FilterSortType, SET_CATEGORY_BY, SET_SORT_BY} from '../types/filters'

export const setSort = (value: FilterSortType) => ({
   type: SET_SORT_BY,
   payload: value,
} as const)

export const setCategory = (value: number | null) => ({
   type: SET_CATEGORY_BY,
   payload: value,
} as const)

export type ActionType
   = ReturnType<typeof setSort>
   | ReturnType<typeof setCategory>
