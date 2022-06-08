import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTimeBook} from "../../store/actions/book";

const BestBook = ({books}) => {

    const bestBook = useSelector(state => state.books.timeBook);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTimeBook(books));
    }, [])

    if (bestBook === null) return <span>Loading...</span>

    return (
        <div>
            <span>лучшая книга</span>
            <div>
                <span>{bestBook.NameOfBook}</span>
                <br/>
                <span>{bestBook.AuthorOfBook}</span>
                <br/>
                <span>{bestBook.YearOfBook}</span>
                <br/>
                <span>{bestBook.Stars}</span>
                <br/>
                <span>{bestBook.ISBN}</span>
            </div>
        </div>
    );
}

export default BestBook;