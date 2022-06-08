export const booksSaving = (books) => {
    const result = [];
    for (const key in books) {
        result.push(books[key]);
    }
    return result;
}