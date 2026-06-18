import React, { useState } from "react";
import "./App.css";
import data from "./components/data.json";

function App() {
  const [books, setBooks] = useState(data.booksData);

  const filterBooks = (category) => {
    if (category === "All") {
      setBooks(data.booksData);
    } else {
      setBooks(
        data.booksData.filter((item) => item.category === category)
      );
    }
  };

  return (
    <div className="App">
      <h1>Books Library</h1>

      <div>
        <button onClick={() => filterBooks("All")}>All</button>
        <button onClick={() => filterBooks("Diniy")}>Diniy</button>
        <button onClick={() => filterBooks("Hadis")}>Hadis</button>
        <button onClick={() => filterBooks("Badiiy")}>Badiiy</button>
      </div>

      <div className="books-container">
        {books.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.cover_img}
              alt={item.title}
              width="200"
            />

            <h2>{item.title}</h2>

            <p>
              <strong>Muallif:</strong> {item.author.join(", ")}
            </p>

            <p>
              <strong>Kategoriya:</strong> {item.category}
            </p>

            <p>{item.description}</p>

            <p>
              <strong>Yili:</strong> {item.publish_year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;