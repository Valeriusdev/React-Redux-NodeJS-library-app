import { useSelector } from "react-redux";
import React from "react";

const Booklist = () => {
  const books = useSelector((state) => state.books);
  return <div className="app-block">Book list</div>;
};

export default Booklist;
