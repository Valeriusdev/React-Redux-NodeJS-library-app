import { useSelector } from "react-redux";
import React from "react";

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block">
      <h2>Book list</h2>
      {books.lenght === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div>
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
