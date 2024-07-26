import React, { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";
import { doc, onSnapshot } from "firebase/firestore";
import { useUserStore } from "../../../lib/userStore";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currenUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currenUser.id), (doc) => {
      setChats(doc.data());
    });

    return () => {
      unSub();
    };
  }, [currenUser.id]);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Archit Gupta</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
