import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { useState } from "react";

const book = [
  { id: 1, name: "Lord of the Rings" },
  { id: 2, name: "Harry Potter and the Sorcerer's Stone" },
  { id: 3, name: "Alice's Adventures in Wonderland" },
  { id: 4, name: "Pinocchio" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Odyssey" },
];
export default function Search2() {
  const [search, setSearch] = useState("");
  const searchresult = (e) => {
    setSearch(e.target.value);
  };
  const filter = book.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        textAlign: "center",
        borderRadius: "10px",
        width: "500px",
        height: "auto",
        margin: "50px auto",
        boxShadow: "1px 2px 9px black",
        fontSize: "20px",
      }}
    >
      <SearchBar search={search} searchresult={searchresult} book={filter} />
      <BookList book={filter} />
    </div>
  );
}
