import React from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

const ChatContainer = () => {
  return (
    <div className="grid h-screen grid-cols-8 gap-2 bg-slate-600 p-1">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default ChatContainer;
