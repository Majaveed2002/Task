import { useState } from "react";
import Message from "./components/Message";

import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [namesList, setnamesList] = useState([]);
  const [message, setMessage] = useState("");
  const [messagesArray, setmessagesArray] = useState([]);

  const handleSelectPdf = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSendMessage = () => {
    const newMessage = {
      title: "User",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88pSc1r0xtli5HAFBfRSmedDOOiFxjA0TjOdvyxFbIA&s",
      message,
    };
    setmessagesArray((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setnamesList((prev) => [...prev, selectedFile.name]);
    setSelectedFile(null);
  };

  const giveAlert = () => {
    alert("Sorry! That Feature is not available right now");
  };

  return (
    <div className="background-container">
      <div className="heading-card">
        <h1>Chatbot Interface</h1>
        <p className="online-logo">Online</p>
      </div>
      <div className="middle-section-container">
        <div className="chat-box-card">
          <div className="conversation-card">
            <h2>Conversation</h2>
            <button className="end-chat-btn">End Chat</button>
          </div>
          <div className="chat-box">
            <div className="message-card">
              <img
                className="profile-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88pSc1r0xtli5HAFBfRSmedDOOiFxjA0TjOdvyxFbIA&s"
                alt="profile-icon"
              />
              <div>
                <h3>User</h3>
                <p>Hi, I have a question about my order</p>
              </div>
            </div>
            <div className="message-card">
              <div className="bot-logo"></div>
              <div>
                <h3>Bot</h3>
                <p>
                  Sure, i'm here to help. Can you please provide me with your
                  order number ?
                </p>
              </div>
            </div>
            {messagesArray.map((eachMessage) => {
              return <Message messageDetails={eachMessage} />;
            })}
          </div>
          <div className="input-card">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleSendMessage} className="send-message-btn">
            Send message
          </button>
        </div>
        <div className="add-pdf-card">
          <h1>Pdf Files</h1>
          <form onSubmit={handleSubmit} className="form-card">
            <label htmlFor="file">Upload PDF</label>
            <input type="file" id="file" onChange={handleSelectPdf} />
            <button className="send-message-btn" type="submit">
              Submit
            </button>
          </form>
          <div className="selected-pdf-card">
            <h2>Uploaded PDFs</h2>
            {namesList.length === 0 && <p> No files uploaded yet.</p>}
            <div className="selected-names-container">
              <ul className="selected-names-card">
                {namesList.map((eachName) => {
                  return <li key={eachName}>{eachName}</li>;
                })}
              </ul>
              {namesList.length !== 0 && (
                <a onClick={giveAlert} href="">
                  Download All
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
