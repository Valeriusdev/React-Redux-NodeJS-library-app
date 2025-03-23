import { useSelector } from "react-redux";
import React from "react";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);

  const handleDeleteBook = (id) => {
    console.log(id);
  };

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.lenght === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
