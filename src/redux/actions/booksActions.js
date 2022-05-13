
export const getBook=()=>{
    return (dispatch) => {
        try {
            const book=JSON.parse(localStorage.getItem('books'))
          dispatch({
            type: "GET_BOOK_SUCCESS",
            payload: book,
          });
        } catch {
          dispatch({
            type: "GET_BOOK_FAILED",
            payload:{},
          });
        }
      };
}

export const addBook=(book)=>{
    return {
    type:'ADD_BOOK',
    payload:book
    }
}

export const getBookById=(id)=>{
    return {
    type:'GET_BOOK_BY_ID',
    payload:id
    }
}


export const deleteBook=(bookId)=>{
    return {
    type:'DELETE_BOOK',
    payload:bookId
    }
}

export const updateBook=(book)=>{
    return {
        type:'UPDATE_BOOK',
        payload:book
        }

}
// export const searchBook=(search)=>{
//   return {
//       type:'SEARCH_BOOK',
//       payload:search
//       }

// }
export const searchBook=(search)=>{
  return (dispatch) => {
      try {
        dispatch({
          type: "SEARCH_BOOK",
          payload: search,
        });
      } catch {
        dispatch({
          type: "SEARCH_BOOK_FAILED",
          payload:{},
        });
      }
    };
}

