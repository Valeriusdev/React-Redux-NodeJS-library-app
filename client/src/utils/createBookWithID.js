createBookWithID = (book) => {
  return {
    ...book,
    isFavorite: false,
  };
};

export default createBookWithID;
