import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <he>Channel Name</he>
        <p>letsmessage sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
