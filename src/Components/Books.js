import React, { useEffect, useState } from "react";

const Books = ({ setBook, searchBooks, setDisplayInfo }) => {
  const [harrybooks, setharryBooks] = useState([]);
  const [sherlockbooks, setSherlockBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  // get the harry books
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setharryBooks(result.items);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  // git the sharlock books /
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setSherlockBooks(result.items);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  // mearge two books
  useEffect(() => {
    if (harrybooks.length > 0 && sherlockbooks.length > 0) {
      const merge = [...harrybooks, ...sherlockbooks];
      setAllBooks(merge);
    }
  }, [harrybooks, sherlockbooks]);
  useEffect(() => {
    if (searchBooks.length > 0) {
      setAllBooks(searchBooks);
    }
  }, [searchBooks]);

  return (
    <div>
      <div>
        <h2>More Books</h2>
        <div className="items">
          {allBooks &&
            allBooks.map((item) => (
              <div className="item" onClick={() => setBook(item)}>
                <img
                  onClick={() => setDisplayInfo(true)}
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
