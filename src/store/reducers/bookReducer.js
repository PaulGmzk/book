export const UPLOAD_BOOKS = 'bookReducer/UPLOAD_BOOKS';
export const UPLOAD_BOOKS_SUCCESS = 'bookReducer/UPLOAD_BOOKS_SUCCESS';
export const SET_TIME_BOOK = 'bookReducer/SET_TIME_BOOK';

const initialState = {
    books: null,
    timeBook: null
};

const bookReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case UPLOAD_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.books
            };
        case SET_TIME_BOOK:
            return {
                ...state,
                timeBook: action.timeBook
            }
        default:
            return state;
    }
}

export default bookReducer;