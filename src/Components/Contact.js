import { useState, useEffect } from "react";
import { ImageArray } from "./Image";
import axios from "axios";
import "../App.css";

function Contact() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setServerMessage(data.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/Contact",
      data: name,
      email,
      message,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  function onNameChange(event) {
    setName(event.target.value);
    //JSON.stringify(name)
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className="contact-page">
      <div className="contact-statement">
        <p>
          If you would like to reach out to me or give me a recommendation you
          can send me a message here.
        </p>
      </div>
      <div className="contact-form">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={message}
              onChange={onMessageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {/* <form
          action="mailto:mattrandrus@gmail.com"
          method="post"
          enctype="text/plain"
        >
          Student Name:
          <input type="text" name="sname" />
          Student Subject:
          <input type="text" name="ssubject" />
          <input type="submit" value="Send"></input>
        </form> */}
        {serverMessage}
      </div>
    </div>
  );
}

export default Contact;
