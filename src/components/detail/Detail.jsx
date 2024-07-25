import React from "react";

import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Aastha Gupta</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="" />
                <span>Photo_2024.png</span>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="" />
                <span>Photo_2024.png</span>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="" />
                <span>Photo_2024.png</span>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="" />
                <span>Photo_2024.png</span>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
