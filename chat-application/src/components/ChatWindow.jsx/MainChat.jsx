import { Chat, Channel, useCreateChatClient, Window, Thread, ChannelHeader } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";
import SidebarMain from "../sidebar/SidebarMain";
import MessageWindow from "./MessageWindow";
import MessageInput from "./MessageInput";

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

const MainChatContent = ({ apiKey }) => {
  // 1. Fetch the user dynamically from localStorage
  const savedUserStr = localStorage.getItem("user");
  const savedUser = savedUserStr ? JSON.parse(savedUserStr) : null;
  
  // Stream IDs cannot contain special characters like '@' or '.'
  const streamId = savedUser?.email ? savedUser.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';

  const user = {
    id: streamId,
    name: savedUser?.name || savedUser?.email || "Guest",
  };
  
  const userToken = StreamChat.getInstance(apiKey).devToken(user.id);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });
  
  if (!client) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Connecting to Stream...
      </div>
    );
  }

  return (
    <Chat client={client} theme="str-chat__theme-dark">
      <div className="flex flex-col md:flex-row h-screen w-full bg-slate-950 text-white overflow-hidden">
        
        {/* 2. Sidebar contains the dynamic ChannelList now */}
        <SidebarMain />

        <div className="flex-1 h-[60vh] md:h-screen flex flex-col min-w-0">
          {/* <Channel> without a prop will automatically show the selected channel from ChannelList */}
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageWindow />
              <MessageInput  />
            </Window>
            {/* 3. Thread component added for replies */}
            <Thread />
          </Channel>
        </div>

      </div>
    </Chat>
  );
};

const MainChat = () => {
  if (!apiKey) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">API Key Missing</h2>
          <p className="text-slate-400">Please add REACT_APP_STREAM_API_KEY to your environment variables.</p>
        </div>
      </div>
    );
  }
  return <MainChatContent apiKey={apiKey} />;
};

export default MainChat;