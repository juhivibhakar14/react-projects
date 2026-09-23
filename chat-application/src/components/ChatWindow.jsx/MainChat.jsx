import { useState } from "react";
import SidebarMain from "../sidebar/SidebarMain";
import MessageHeader from "./MessageHeader";
import MessageWindow from "./MessageWindow";
import MessageInput from "./MessageInput";

const initialMessages = [
  { id: 1, text: "Hey Juhi 👋", sender: "other" },
  { id: 2, text: "Hey! How are you?", sender: "me" },
  { id: 3, text: "I'm good! Working on VYBE 😄", sender: "other" },
  { id: 4, text: "Nice! The chat UI is coming together.", sender: "me" },
];

const MainChat = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(), // unique ID
      text: text,
      sender: "me", // Because you are sending it, it will align to the right!
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <SidebarMain />

      <div className="flex-1 w-full min-h-screen flex flex-col">
        <MessageHeader />
        <MessageWindow messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />  
      </div>
    </div>
  );
};

export default MainChat;