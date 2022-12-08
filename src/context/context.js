import { createContext, useContext, useState, useRef, useEffect } from "react";
import api from "../api/contacts";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const NewContext = createContext();

// we will import this to main app
export function ValueProvider({ children }) {
  // below is all 'props' we send to components
  const [contact, setContact] = useState([]);

  // contactlist.js
  async function retriveapi() {
    const response = await api.get("/contact");
    if (response.data) {
      setContact(response.data);
    }
  }
  useEffect(() => {
    async function getallcontact() {
      const allcontact = await retriveapi();
      if (allcontact) {
        setContact(allcontact);
      }
    }
    getallcontact();
  }, []);

  // addcontact.js
  const [state, setState] = useState({
    name: "",
    email: "",
    job: "",
    description: "",
  });
  const name = state.name;
  const email = state.email;
  const job = state.job;
  const description = state.description;
  // const nameRef = useRef();
  // const emailRef = useRef();
  // const jobRef = useRef();
  // const descriptionRef = useRef();
  const navigate = useNavigate();

  async function add(e) {
    const request = {
      id: uuidv4(),
      // name: nameRef.current.value,
      // email: emailRef.current.value,
      // job: jobRef.current.value,
      // description: descriptionRef.current.value,
      // name: name,
      // email: email,
      // job: job,
      // description: description,
      ...state,
    };
    e.preventDefault();
    const response = await api.post("/contact", request);
    setContact((e) => [...e, response.data]);
    navigate("/");
  }

  // delete.js
  async function removeitem(id) {
    await api.delete(`/contact/${id}`);
    const newlist = contact.filter((e) => {
      return e.id !== id;
    });
    setContact(newlist);
    navigate("/");
  }

  // search function
  const [search, setSearch] = useState("");
  const filter = contact.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      e.job.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase())
  );
  const renderlist = filter.map((x, index) => {
    return <ContactCard list={x} key={index} />;
  });
  // value we props out
  const value = {
    contact,
    setContact,
    retriveapi,
    removeitem,
    add,
    // nameRef,
    // emailRef,
    // jobRef,
    // descriptionRef,
    state,
    setState,
    name,
    job,
    email,
    description,
    search,
    setSearch,
    filter,
    renderlist,
  };

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
}
// import this shortcut in other components file
export function useProvide() {
  return useContext(NewContext);
}
