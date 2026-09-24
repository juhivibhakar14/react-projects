import React, { useState } from "react";
import Search from "./Search";
import { ChannelList, useChatContext } from "stream-chat-react";
import NewChatModal from "./NewChatModal";

const SidebarMain = () => {
    const { client } = useChatContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Only show channels where the current user is a member
    const filters = { members: { $in: [client.userID] } };
    const sort = { last_message_at: -1 };

    return (
        <div className="h-[40vh] md:h-screen w-full md:min-w-[320px] md:w-[320px] lg:min-w-[400px] lg:w-[400px] bg-gradient-to-b from-slate-900 to-slate-800 p-4 text-white flex flex-col gap-4 border-b md:border-b-0 md:border-r border-slate-700 relative">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-wide">Chats</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center w-8 h-8 font-bold shadow-md shadow-blue-500/20"
                    title="Start New Chat"
                >
                    +
                </button>
            </div>
            
            <Search />
            
            <div className="flex flex-col gap-2 mt-2 flex-1 overflow-y-auto">
                {client.userID && (
                    <ChannelList 
                        filters={filters} 
                        sort={sort} 
                    />
                )}
            </div>

            {isModalOpen && (
                <NewChatModal onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default SidebarMain;