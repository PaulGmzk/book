export const timeBook = (books) => {
    const timeBooks = books.filter(book => {
        const year = new Date().getFullYear();
        if (year - parseInt(book.YearOfBook) > 2) return true;
    })
    const stars = timeBooks.reduce((acc, book) => {
        if (book.Stars > acc) acc = book.Stars;
        return acc;
    }, 0)
    //console.log(stars)
    const resultArr = timeBooks.filter((book) => book.Stars === stars);
    if (resultArr.length === 1) {
        return resultArr[0];
    } else {
        const randomIndex = Math.floor(Math.random() * (resultArr.length - 0 + 1)) + 0;
        return resultArr[randomIndex];
    }
}