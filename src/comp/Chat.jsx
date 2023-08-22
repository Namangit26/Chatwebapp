
import React, { useContext } from "react";
import Mssgs from "./Mssgs";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="overlay__close">Close</div>
        <div className="chatIcons">    
          <img src="./cam.png" alt="" />
          <img src="./add1.png" alt="" />
          <img src="./more.png" alt="" />
          
        </div>
      </div>
      <Mssgs/>
      <Input/>
    </div>
  );
};

export default Chat;
