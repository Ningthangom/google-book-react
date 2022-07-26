import React, { useEffect } from 'react';
import ResultedBooks from '../BookList/BookList'
import {useState} from 'react';
import styles from './Search.module.scss'


const SearchBooks = () => {

    const [textInput, setTextInput] = useState('');
    const [resultBooks, setResultBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
          const initialData =async() => {
          try {
              const response = await fetch(
                  `https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40`,
              );

              if (!response.ok) {
                  throw new Error(`Error! status: ${response.status}`);
              }

              let booksObject = await response.json();
              setResultBooks(booksObject.items);
              return 0;
          } catch (err) {
              console.log(err);
          } finally {
            setLoading(false)
          }
          }
    initialData();
    },[])

    const handleOnChange = (event) => {
        setTextInput(event.target.value);
    }

    const handleSearchBooks = async (e) => {
        console.log("Search button is click")
            e.preventDefault();
             try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=search+${textInput}&maxResults=40`,
        );

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        let booksObject = await response.json();
        setResultBooks(booksObject.items);
        setTextInput('');
        return 0;
    } catch (err) {
        console.log(err);
    }
}

/* console.log(resultBooks.length); */

  return (
      <>
          <div className={styles.Search}>
              <div className={styles.search_box}>
                  <form onSubmit={handleSearchBooks}>
                      {" "}
                      <input
                          type="text"
                          className={styles.input_search}
                          placeholder="Type to Search..."
                          onChange={handleOnChange}
                          value={textInput}
                      />
                      <button
                          className={styles.btn_search}
                         type="submit"
                      >
                          <i className="fa fa-search"></i>
                      </button>
                  </form>
              </div>
          </div>
          {loading ? (
              <div className={styles.ring}>
                  Loading
                  <span></span>
              </div>
          ) : (
              <ResultedBooks books={resultBooks} />
          )}
      </>
  );
}

export default SearchBooks