import React from 'react';
import {useDispatch} from "react-redux";
import {deleteBook, sortField} from "../../store/actions/book";
import classes from './Table.module.css';

const Table = ({books}) => {
    const dispatch = useDispatch();

    const handleClickName = () => {
        dispatch(sortField('NameOfBook', books))
    }
    const handleClickAuthor = () => dispatch(sortField('AuthorOfBook', books));
    const handleClickYear = () => dispatch(sortField('YearOfBook', books));
    const handleClickStars = () => dispatch(sortField('Stars', books));
    const handleClickIsbn = () => dispatch(sortField('ISBN', books));

    const handleClickDelete = (book) => dispatch(deleteBook(book.NameOfBook));

    return (
        <div className="table-data" >
            <table>
                <th onClick={handleClickName} className={classes.table__headers}>Name of Book</th>
                <th onClick={handleClickAuthor} className={classes.table__headers}>Author of Book</th>
                <th onClick={handleClickYear} className={classes.table__headers}>Year of Book</th>
                <th onClick={handleClickStars} className={classes.table__headers}>Stars</th>
                <th onClick={handleClickIsbn} className={classes.table__headers}>ISBN</th>
                <tbody>
                {books.map((book, index) => {
                    return (
                        <tr key={index}>
                            <th>{book.NameOfBook}</th>
                            <th>{book.AuthorOfBook}</th>
                            <th>{book.YearOfBook}</th>
                            <th>{book.Stars}</th>
                            <th>{book.ISBN}</th>
                            <th onClick={() => handleClickDelete(book)} className={classes.table__headers}>удалить</th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;