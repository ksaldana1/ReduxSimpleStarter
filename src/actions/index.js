// activeBook action creator
export function selectBook(book) {
  // selectBook is an action creator
  // always has type, and payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
