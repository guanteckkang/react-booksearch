// user search for book

export default function SearchBar({ search, searchresult, book }) {
  return (
    <>
      <h1>Search:</h1>
      <input type="text" value={search} onChange={searchresult}></input>
      <p>Search input: {search}</p>
      <p>Search result: {search == "" ? "0 books" : book.length + " books"}</p>
    </>
  );
}
