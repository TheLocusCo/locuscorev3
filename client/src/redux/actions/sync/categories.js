export const EMPTY_CATEGORIES = 'EMPTY_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const UPDATE_ACTIVE_CATEGORY = 'UPDATE_ACTIVE_CATEGORY'

export function emptyCategories() {
  return {
    type: EMPTY_CATEGORIES
  }
}

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

export function filterFromActiveCategory(mode, category) {
  return {
    type: `FILTER_${mode.toUpperCase()}`,
    activeCategory: category
  }
}
