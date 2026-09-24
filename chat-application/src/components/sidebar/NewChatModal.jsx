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
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-lg w-full max-w-md p-6 border border-slate-700 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Start New Chat</h2>
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-white text-2xl font-bold leading-none"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2">
                    {loading ? (
                        <p className="text-slate-400 text-center py-4">Loading users...</p>
                    ) : users.length === 0 ? (
                        <p className="text-slate-400 text-center py-4">No other users found. Tell a friend to register!</p>
                    ) : (
                        users.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => handleCreateChat(u)}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700 transition-colors text-left bg-slate-900/50"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {u.name ? u.name.charAt(0).toUpperCase() : u.id.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-white text-lg">{u.name || u.id}</p>
                                    <p className="text-sm text-slate-400">@{u.id}</p>
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
