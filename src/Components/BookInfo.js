import React from "react";

const BookInfo = ({ book }) => {
  return (
    <>
      {book && (
        <div className="info">
          <div className="infoimg">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
          <div className="desc">
            <div className="publish">
              <h3>{book.volumeInfo.title}</h3>
              <h3 className="pub">
                Published On : {book.volumeInfo.publishedDate}
              </h3>
            </div>
            <p>{book.volumeInfo.authors[0]}</p>
            <div className="fulldesc">
              <p>{book.volumeInfo.description}</p>
            </div>
            <p className="rating">
              Avg Rating : {book.volumeInfo.averageRating} | Rating Count :{" "}
              {book.volumeInfo.ratingsCount} | Publisher : Blurb | Language :{" "}
              {book.volumeInfo.language}
            </p>
            <div className="btn">
              <a href={book.volumeInfo.previewLink}>
                <button>Now Read!</button>
              </a>
              <a href={book.volumeInfo.infoLink}>
                <button>More Info!</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookInfo;
