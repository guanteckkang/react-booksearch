// display filtered booklist

export default function BookList({ book }) {
  return book.map((c) => {
    return (
      <li key={c.id}>
        ID: {c.id}. Name: {c.name}
      </li>
    );
  });
}
