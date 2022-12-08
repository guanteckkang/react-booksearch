import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("kang");
  const [email, setEmail] = useState("kang@gmail.com");
  const [message, setMessage] = useState("Hello World!");
  const obj = { name, email, message };

  const Submit = (c) => {
    c.preventDefault();
    alert(JSON.stringify(obj));
  };
  return (
    <div className="Form">
      <h1 className="formhead">GTK's Form</h1>
      <form onSubmit={Submit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          title="fullname"
          required
        ></input>
        <br />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          title="email address"
          required
        ></input>
        <br />
        <label>Message: </label>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          title="message"
          required
        ></input>
        <br />
        <label>State: </label>
        <select>
          <option disabled>-</option>
          <option>kelantan</option>
          <option>sabah</option>
          <option>sarawak</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
}
