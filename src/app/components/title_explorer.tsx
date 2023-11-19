"use client"

import { ChevronDown, ChevronRight } from "lucide-react";
import Items from "./items";
import Social from "./social";
import { useState } from "react";
import clsx from "clsx";

export default function TitleExplorer() {

  const [explorerView, setExplorerView] = useState(true);
  
  return (
    <div className="w-full flex flex-col">
      
      <button onClick={() => setExplorerView(!explorerView)} className='bg-gray-700 p-1 w-full flex flex-row items-center'>
        <span className='mr-2'>
        {explorerView ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        </span>
        <span className='font-semibold text-[10px] uppercase'>Gabriel Castro Portfolio</span>
      </button>
      
      {/* item src */}
      <div className={clsx(!explorerView && 'hidden', 'w-full')}>
        <Items />
        <Social />
      </div>
    </div>

  );
}