import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import getBooks from "./FirebaseApp";
import Table from "./components/Table/Table";
import BookForm from "./components/BookForm/BookForm";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {getTimeBook, uploadBooks} from "./store/actions/book";
import BestBook from "./components/BestBook/BestBook";
import {timeBook} from "./utils/timeBook";

function App() {
    const dispatch = useDispatch();

    const books = useSelector(state => state.books.books);

    useEffect(() => {
        dispatch(uploadBooks());
    }, [])

    if (!books) return <Preloader/>;

  return (
    <div className="App">
            <div className="wrapper">
            <div className="wrapper-content">
            <BestBook books={books} />
                <Table books={books} />
               <BookForm/>
            </div>
        </div>


    </div>

  );
}

export default App;
