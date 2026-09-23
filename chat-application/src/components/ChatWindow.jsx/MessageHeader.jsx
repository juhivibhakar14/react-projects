const MessageHeader = () => {
    return (
        <div className="bg-gray-800  text-white p-4">
           <img src="https://api.dicebear.com/7.x/identicon/svg?seed=Group1" 
           alt="Group Avatar" 
           className="w-10 h-10 rounded-full mr-3 bg-gray-200 border" />
            <div>
                <p className="text-sm font-semibold">React Developers Group</p>
                <p className="text-sm text-gray-600">Latest group chat message...</p>
            </div>
        </div>
    );
};

export default MessageHeader;