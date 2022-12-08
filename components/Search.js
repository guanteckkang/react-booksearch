import { useState } from "react";
const book = [
  { id: 1, name: "Lord of the Rings" },
  { id: 2, name: "Harry Potter and the Sorcerer's Stone" },
  { id: 3, name: "Alice's Adventures in Wonderland" },
  { id: 4, name: "Pinocchio" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Odyssey" },
  { id: 7, name: "The Great Gatsby" },
  { id: 8, name: "The Dark Tower " },
  { id: 9, name: "IT" },
  { id: 10, name: "The Maze Runner" },
  { id: 11, name: "The Godfather " },
  { id: 12, name: "The Wizard of Oz " },
  { id: 13, name: "The Shawshank Redemption " },
  { id: 14, name: "The Silence of the Lambs" },
  { id: 15, name: "Crazy Rich Asians" },
];

export default function Search() {
  const [search, setSearch] = useState("");
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
      <h2>Search:</h2>
      <input
        type="text"
        value={search.toLowerCase()}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      {search !== "" && (
        <div>
          <p>Display search: {search}</p>
          <p>Display results: {filter.length} results found</p>
          <ul>
            {!search
              ? "Not found"
              : filter.map((e) => {
                  return (
                    <li key={e.id}>
                      ID: {e.id}. Name: {e.name}
                    </li>
                  );
                })}
          </ul>
        </div>
      )}
    </div>
  );
}
