import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set, remove } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBpsNJ6Z4QS8Ia4hqTgC_Yt4TRKnBUueVg",
    authDomain: "books-9964b.firebaseapp.com",
    databaseURL: "https://books-9964b-default-rtdb.firebaseio.com",
    projectId: "books-9964b",
    storageBucket: "books-9964b.appspot.com",
    messagingSenderId: "227051782991",
    appId: "1:227051782991:web:f42e5ebbb1ceb42b23fb3a",
    measurementId: "G-LNWQTDEFY3"
};
initializeApp(firebaseConfig);

async function getBooks() {
    const dbRef = ref(getDatabase());
    let results = null;
    await get(child(dbRef, 'bookNames')).then((snapshot)=>{
        if (snapshot.exists()) {
            results = snapshot.val();
        } else {
            console.log ('no data available');
        }
    }).catch((error)=> {
        console.error(error);
    });
    return results;
}

export async function writeBookData(name, author, year, stars, isbn) {
    const db = getDatabase();
    try {
        await set(ref(db, 'bookNames/' + name), {
            AuthorOfBook: author,
            ISBN: isbn,
            NameOfBook : name,
            Stars: stars,
            YearOfBook: year
        });
    } catch(e) {
        console.log(e)
    }
}

export async function deleteBookData(name) {
    const db = getDatabase();
    try {
        await remove(ref(db, 'bookNames/' + name));
        // console.log('yes');
    } catch(e) {
        console.log(e)
    }
}

export default getBooks;
