export const sortFieldUtil = (field, books) => {
    const sort = (books) => {
        if (books.length < 2) return books;
        const greater = [];
        const lower = [];
        const pivotIndex = Math.ceil((books.length - 1) / 2);
        const pivot = books[pivotIndex];
        for (let i = 0; i < pivotIndex; i += 1) {
            if (books[i][field] > pivot[field]) greater.push(books[i]);
            else lower.push(books[i]);
        }
        for (let i = pivotIndex + 1; i < books.length; i += 1) {
            if (books[i][field] > pivot[field]) greater.push(books[i]);
            else lower.push(books[i]);
        }
        return sort(lower).concat(pivot, sort(greater));
    }
    return sort(books);
}