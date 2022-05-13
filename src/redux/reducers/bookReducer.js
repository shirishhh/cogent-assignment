
const bookReducer = (state=[], action) => {
    switch (action.type) {
        case 'GET_BOOK_SUCCESS':
            return [...action.payload]

        case 'ADD_BOOK':
            let stateCopy = [...state, action.payload];
            localStorage.setItem('books', JSON.stringify(stateCopy));
            return stateCopy

        case 'DELETE_BOOK':
            const deleteBook= state.filter(x => x.bookId !== action.payload);
            localStorage.setItem('books', JSON.stringify(deleteBook));
            return deleteBook

        case 'GET_BOOK_BY_ID':
            const getBook= state.filter((x) =>{
                if(x.bookId === action.payload){
                    return {...state}
                }
                return getBook

            }) ;
            return getBook;

        case 'UPDATE_BOOK':
    let updateBook=state;
          updateBook.map((book) => {
            const {bookId,bookName,author,description,price} = action.payload;
            if(book.bookId === bookId){
            book.bookName = bookName;
            book.author = author;
            book.description = description;
            book.price=price;
            }
           return updateBook
        })
        localStorage.setItem('books',JSON.stringify(updateBook));
        return updateBook

        case 'SEARCH_BOOK':
            let searchBook=state
            const {bookId, bookName,author}=action.payload
            //    searchBook= state.filter((x) =>{
            //     if(x.bookId===bookId || x.bookName===bookName || x.author===author){
            //     return {...searchBook}
            //     }
            // })
            searchBook=state.filter(x=>x.bookId===bookId || x.bookName===bookName || x.author===author);
            return searchBook;
            case 'SEARCH_BOOK_FAILED':
                return {...action.payload}

        default:
            return state;
    }

}
export default bookReducer;