const Search = () => {
    return (
        <div className="w-full bg-gray-100 rounded-md">
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 text-black"
            />
        </div>
    );
};

export default Search;