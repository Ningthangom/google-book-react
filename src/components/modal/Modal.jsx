import styles from './Modal.module.scss'
import Popup from "reactjs-popup";

const Modal = ({ bookDetail }) => {


    return (
        <Popup
            trigger={
                <button className={styles.btn_primary}> view Detail </button>
            }
            modal
            nested
        >
            {(close) => (
                <div className={styles.modal}>
                    <button className={styles.close} onClick={close}>
                        &times;
                    </button>
                    <div className={styles.header}>
                        {" "}
                        {bookDetail.title.slice(0, 50)}
                    </div>
                    <div className={styles.content}>
                        <p style={{ marginTop: "0px" }}>
                            Author:{" "}
                            {bookDetail.authors
                                ? bookDetail.authors.slice(0, 4).join(", ")
                                : "Not Mentioned"}
                        </p>
                        <p style={{ marginTop: "0px", marginBottom: "4px" }} className={styles.description}>
                            {" "}
                            Description :{" "}
                            {bookDetail.description
                                ? bookDetail.description
                                : "NO Description"}
                        </p>
                    </div>
                    <div className={styles.actions}>
                        <button
                            className={styles.button}
                            onClick={() => {
                               /*  console.log("modal closed "); */
                                close();
                            }}
                        >
                            close modal
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );

}
export default Modal;
