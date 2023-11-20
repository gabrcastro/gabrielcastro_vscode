import { File } from "lucide-react";

function Tabs() {
  return (
    < div className='bg-gray-900 w-full h-9 flex flex-row items-center justify-start' >
      <div className="px-3 bg-slate-700 flex flex-row h-full items-center justify-center border-b border-purple-400">
        <File size={15} />
        <span className="ml-2">about</span>
        <span className="w-2 h-2 rounded-full ml-5 bg-white" />
      </div>
    </div >

  );
}

export default Tabs;