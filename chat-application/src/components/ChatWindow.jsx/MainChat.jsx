import { Chat, Channel, useCreateChatClient, Window, Thread, ChannelHeader } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";
import SidebarMain from "../sidebar/SidebarMain";
import MessageWindow from "./MessageWindow";
import MessageInput from "./MessageInput";

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

const MainChat = () => {
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
    <Chat client={client}>
      <div className="flex h-screen w-full bg-slate-950 text-white">
        
        {/* 2. Sidebar contains the dynamic ChannelList now */}
        <SidebarMain />

        <div className="flex-1 min-h-screen flex flex-col">
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

export default MainChat;