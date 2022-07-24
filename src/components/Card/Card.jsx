import styles from './Card.module.scss'
import Modal from '../modal/Modal'

const Card = ({book, index}) => {
    const {volumeInfo} = book;
  return (
      <div className={styles.card_wrapper}>
          <div className={styles.card} key={index}>
              <img
                  src={
                      volumeInfo.imageLinks
                          ? volumeInfo.imageLinks.thumbnail
                          : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                  }
                  alt="https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
              />
              <h3>
                  <a href="">{volumeInfo.title.slice(0, 30)}</a>
              </h3>
              <p style={{ marginTop: "0px" }}>
                  Author:
                  {volumeInfo.authors
                      ? volumeInfo.authors.slice(0, 2).join(",")
                      : "Not Mentioned"}
              </p>
              <p style={{ marginTop: "0px", marginBottom: "4px" }}>
                  {" "}
                  Description :{" "}
                  {volumeInfo.description
                      ? `${volumeInfo.description.slice(0, 40)} .....`
                      : "NO Description"}
              </p>

              <Modal bookDetail={volumeInfo} />
          </div>
      </div>
  );
}

export default Card