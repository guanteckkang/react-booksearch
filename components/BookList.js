// display filtered booklist
export default function BookList(props) {
  return props.book.map((c) => {
    return (
      <li key={c.id}>
        ID: {c.id}. Name: {c.name}
      </li>
    );
  });
}
