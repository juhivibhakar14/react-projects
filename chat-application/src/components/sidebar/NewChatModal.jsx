import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

const NewChatModal = ({ onClose }) => {
    const { client } = useChatContext();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!client) return;
            try {
                // Fetch all users except the current user
                const response = await client.queryUsers(
                    { id: { $ne: client.userID } },
                    { id: 1 }, // sort by id
                    { limit: 20 }
                );
                setUsers(response.users);
            } catch (err) {
                console.error("Error fetching users", err);
            }
            setLoading(false);
        };
        fetchUsers();
    }, [client]);

    const handleCreateChat = async (selectedUser) => {
        try {
            // Create a messaging channel with the current user and selected user
            const channel = client.channel("messaging", {
                members: [client.userID, selectedUser.id],
            });
            // watch() actually initiates the connection to this channel
            await channel.watch();
            onClose(); // Close the modal
        } catch (err) {
            console.error("Error creating channel", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl w-full max-w-md p-6 border border-white/10 shadow-2xl scale-in-center">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <h2 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        Start New Chat
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-all"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-4">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-medium">Loading users...</p>
                        </div>
                    ) : users.length === 0 ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">👥</div>
                            <p className="text-slate-300 font-medium mb-2">No other users found.</p>
                            <p className="text-sm text-slate-500">Tell a friend to register and chat with them!</p>
                        </div>
                    ) : (
                        users.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => handleCreateChat(u)}
                                className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/5 transition-all text-left bg-white/5 backdrop-blur-md"
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                                    {u.name ? u.name.charAt(0).toUpperCase() : u.id.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">{u.name || u.id}</p>
                                    <p className="text-sm text-slate-400 font-medium">@{u.id}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                    <span className="text-white">→</span>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewChatModal;
