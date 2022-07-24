import styles from './books.module.scss';
import Card from '../Card/Card'

const BookList = ({books}) => {

  console.log(books);
  return (
      <div className={styles.books_container}>
        {books.map((book, index) => <Card book={book} index={index}/>)}
      </div>
  );
}

export default BookList