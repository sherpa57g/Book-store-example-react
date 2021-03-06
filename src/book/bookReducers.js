export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        Object.assign({}, action.book)
      ]
    case 'FETCH_BOOKS_SUCCESS':
      return action.books
    default:
      return state
  }
}
