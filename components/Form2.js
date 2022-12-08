import { useState } from "react";

export default function Form() {
  const value = {
    name: "kang",
    email: "kang@gmail.com",
    message: "Hello World",
  };
  const [entry, setEntry] = useState(value);
  const Submit = (c) => {
    c.preventDefault();
    alert(JSON.stringify(entry));
  };
  return (
    <div className="App">
      <form onSubmit={Submit}>
        <label>Name: </label>
        <input
          type="text"
          value={entry.name}
          onChange={(e) => {
            setEntry({ ...entry, name: e.target.value });
          }}
          title="fullname"
          required
        ></input>
        <br />
        <label>Email: </label>
        <input
          type="email"
          value={entry.email}
          onChange={(e) => {
            setEntry({ ...entry, email: e.target.value });
          }}
          title="email address"
          required
        ></input>
        <br />
        <label>Message: </label>
        <input
          type="text"
          value={entry.message}
          onChange={(e) => {
            setEntry({ ...entry, message: e.target.value });
          }}
          title="message"
          required
        ></input>
        <br />
        <label>Sate: </label>
        <select>
          <option disabled>-</option>
          <option>kelantan</option>
          <option>sabah</option>
          <option>sarawak</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(entry)}</p>
    </div>
  );
}
