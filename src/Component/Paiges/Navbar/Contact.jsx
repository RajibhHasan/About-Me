import React, { useState, useEffect } from "react";
import "./Style/Contact.css";
import Costome from "./Costome";

import { v4 as uuidv4 } from "uuid";

const Contact = () => {
  
  

 

  const [storeData, setStoreData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const url = "http://localhost:5174/userData";
  const [logic, setLogic] = useState(false);
  const [store, setStore] = useState([]);
  const [esc, setEsc] = useState({
    title: "Waiting...",
    dec: "Plase Wait......",
  });

  const FetchHooks = (url, post, da) => {
    const postData = async () => {
      try {
        const response = await fetch(url, {
          method: post,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(da),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");

          setEsc({
            title: "Network Error",
            dec: "Network response was not Ok.!",
          });
        }

        setEsc({
          title: "Successfully Send",
          dec: "Your data posted successfully...!",
        });
      } catch (error) {
        setEsc({ title: "Error", dec: `${error.message}` });
      }
    };

    postData();
  };

  const InputHandel = (e) => {
    const name = e.target.name;

    setStoreData((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const SubmitData = (e) => {
    e.preventDefault();
    
    
    setStoreData((old) => {
      return { ...old, id:uuidv4() }
    });
    FetchHooks(url, "POST", storeData);
    setLogic(true);
    setStoreData({ name: "", email: "", subject: "", message: "" });
  };

  const TrueOrFalse = (e) => {
    setLogic(e);
  };

  return (
    <>
      <div>
        <div className="Contact-main">
          {logic && <Costome title={esc} clo={TrueOrFalse} />}
          <div className="Contact-box">
            <div className="from-box">
              <form onSubmit={SubmitData}>
                <div className="title-login">Let's Talk With Me</div>
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    className="inpot-area"
                    placeholder="Name"
                    value={storeData.name}
                    onChange={InputHandel}
                    required
                  />
                </div>

                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    className="inpot-area"
                    value={storeData.email}
                    placeholder="Email"
                    onChange={InputHandel}
                    required
                  />
                </div>

                <div className="input-box">
                  <input
                    type="text"
                    name="subject"
                    className="inpot-area"
                    placeholder="Subject"
                    value={storeData.subject}
                    onChange={InputHandel}
                    required
                  />
                </div>

                <div className="input-box">
                  <textarea
                    type="text"
                    name="message"
                    className="inpot-area"
                    id="textarea"
                    value={storeData.message}
                    placeholder="Message"
                    onChange={InputHandel}
                    required
                  />
                </div>
                <div className="btn-box">
                  <button type="submit" className="Submit-Button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
