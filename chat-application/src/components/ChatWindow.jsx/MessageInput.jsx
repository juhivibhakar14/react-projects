import { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSendMessage(text);
    setText(""); // Clear the input after sending
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-500">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-slate-950 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
      />
      <button 
        onClick={handleSend}
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Send
      </button>
    </div>
  );
}
export default MessageInput;