const Group = () => {
    return (
        <div className="flex items-center mb-2 bg-white text-black p-2 rounded shadow-sm">
            <img src="https://api.dicebear.com/7.x/identicon/svg?seed=Group1" alt="Group Avatar" className="w-10 h-10 rounded-full mr-3 bg-gray-200 border" />
            <div>
                <p className="text-sm font-semibold">React Developers Group</p>
                <p className="text-sm text-gray-600">Latest group chat message...</p>
            </div>
        </div>
    );
};

export default Group;