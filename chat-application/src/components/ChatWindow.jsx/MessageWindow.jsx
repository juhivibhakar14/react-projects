const MessageWindow = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-slate-950">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                message.sender === "me"
                  ? "bg-blue-600 text-white rounded-br-sm"
                  : "bg-gray-800 text-white rounded-bl-sm"
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageWindow;