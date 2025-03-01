import Booklist from "./components/BookList/Booklist";
import BookForm from "./components/BookForm/BookForm";
import Filter from "./components/Filter/Filter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Library App</h1>
      </header>
      <main>
        <div>
          <BookForm />
        </div>
        <div>
          <Filter />
          <Booklist />
        </div>
      </main>
    </div>
  );
}

export default App;
