import React from 'react';
import './Navbar.css';



const Contact = ({ avatar, name, online, }) => {
  return (
    <div>
      <div className="Contact">

        <img className="avatar" src={avatar} />

        <div className="status">
          <p className="name">{name}</p>
          <p className="status-text">{online ? "online" : "offline"}</p>

          {online ? (

            <span className="status-online" />
          ) : (
            <span className="status-offline" />

            )}
        </div>

      </div>
    </div>
  );
}


export default Contact;