import Search from "./Search";
import Group from "./Group";

const SidebarMain = () => {
    return (
        <div className="min-h-screen min-w-[400px] w-[400px] bg-gradient-to-b from-slate-900 to-slate-800 p-4 text-white flex flex-col gap-4 border-r border-slate-700">
            <h1 className="text-xl font-bold tracking-wide">Chats</h1>
            <Search />
            <div className="flex flex-col gap-2 mt-2">
                <Group />
            </div>
        </div>
    );
};

export default SidebarMain;