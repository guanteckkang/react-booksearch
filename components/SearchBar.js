// user search for book

export default function SearchBar({ search, searchresult, book }) {
  return (
    <>
      <h1>Search:</h1>
      <input
        type="text"
        value={search.toLowerCase()}
        onChange={searchresult}
      ></input>
      <p>Search input: {search}</p>
      <p>Search result: {book.length} results</p>
    </>
  );
}
