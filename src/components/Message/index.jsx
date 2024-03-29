import React from "react";

const Message = (props) => {
  const { messageDetails } = props;
  const { title, logo, message } = messageDetails;
  return (
    <div className="message-card">
      <img className="profile-icon" src={logo} alt="profile-icon" />
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
