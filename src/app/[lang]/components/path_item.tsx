import { ChevronRight } from "lucide-react";

function PathItem() {
  return (
    <div className='bg-gray-700 p-[1px] py-0.5 pl-5 w-full flex flex-row items-center'>
      <span className='font-light text-gray-300 text-sm mr-2'>src</span>
      <span className=''>
        <ChevronRight color="rgb(209 213 219)" size={13} />
      </span>
      <span className='font-light text-gray-300 text-sm ml-2'>about</span>
    </div>
  );
}

export default PathItem;