function Post(props) {
  const post = props.post.map((list) => {
    return <List key={list.id} list={list} />;
  });
  return (
    <div>
      <h1 style={{ color: "pink", margin: "10px", textAlign: "center" }}>
        LIST OF ITEMS AND DESCRIPTION:
      </h1>
      {post}
    </div>
  );
}

function List(props) {
  const { title, id, body } = props.list;
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2 style={{ color: "red" }}>
        No.{id}: {title.toUpperCase()}
      </h2>
      <h3 style={{ color: "blue" }}>Description:</h3>
      <p style={{ color: "green" }}> {body}.</p>
      <br />
    </div>
  );
}

export default Post;
