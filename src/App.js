import { useState } from "react";
import "./App.css";
import BookInfo from "./Components/BookInfo";
import Books from "./Components/Books";
import NavBar from "./Components/NavBar";

function App() {
  const [book, setBook] = useState();
  const [searchBooks, setSearchBooks] = useState([]);
  const [displayInfo, setDisplayInfo] = useState(false);
  console.log(displayInfo);
  return (
    <div>
      <NavBar setSearchBooks={setSearchBooks} setDisplayInfo={setDisplayInfo} />
      <main>
        {displayInfo && <BookInfo book={book} />}
        <Books
          setBook={setBook}
          searchBooks={searchBooks}
          setDisplayInfo={setDisplayInfo}
        />
      </main>
    </div>
  );
}

export default App;
