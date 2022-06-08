import {SET_TIME_BOOK, UPLOAD_BOOKS_SUCCESS} from "../reducers/bookReducer";
import getBooks, {deleteBookData, writeBookData} from "../../FirebaseApp";
import {booksSaving} from "../../utils/books";
import {sortFieldUtil} from "../../utils/sortField";
import {timeBook} from "../../utils/timeBook";

export const uploadBooks = () => async (dispatch) => {
    const data = await getBooks();
    dispatch(uploadBooksSuccess(booksSaving(data)))
}

export const uploadBooksSuccess = (books) => ({
    type: UPLOAD_BOOKS_SUCCESS,
    books
});

export const sortField = (field, books) => (dispatch) => {
    const data = sortFieldUtil(field, books);
    dispatch(uploadBooksSuccess(data))
}

export const writeBook = (name, author, year, stars, isbn) => async (dispatch) => {
    await writeBookData(name, author, year, stars, isbn);
    dispatch(uploadBooks());
}

export const deleteBook = (name) => async (dispatch) => {
    await deleteBookData(name);
    dispatch(uploadBooks());
}

const setTimeBook = (timeBook) => ({
    type: SET_TIME_BOOK,
    timeBook
})

export const getTimeBook = (books) => async (dispatch) => {
    const data = await timeBook(books);
    dispatch(setTimeBook(data));
}