import React, {useState} from 'react';
import {writeBook} from "../../store/actions/book";
import {useDispatch} from "react-redux";

const BookForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [stars, setStars] = useState('');
    const [isbn, setIsbn] = useState('');

        const handleClickReset = () => {
            setName('');
            setAuthor('');
            setYear('');
            setStars('');
            setIsbn('');
        }

        const handleClickSubmit = (e) => {
            e.preventDefault();
            dispatch(writeBook(name, author, year, stars, isbn))
        }

        const onChangeStars = (e) => {
            if (e.target.value < 10) setStars(e.target.value)
        }

    return (
        <div>
            <form>
                <input placeholder="Enter name of book" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Enter author of book" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input placeholder="Enter year of book" value={year} onChange={(e) => setYear(e.target.value)} />
                <input placeholder="Enter stars of book" value={stars} type='number' onChange={onChangeStars} />
                <input placeholder="Enter isbn of book" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

                <div>
                    <button type="reset" onClick={handleClickReset}>Clean</button>
                    <button onClick={handleClickSubmit}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;