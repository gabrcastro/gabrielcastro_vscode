"use client";

import clsx from 'clsx';
import { Blocks, BugPlay, ChevronDown, ChevronRight, File, Files, Folder, GitMerge, MoreHorizontal, Search } from 'lucide-react'
import { useState } from 'react';

function Items() {

  const [itemsView, setItemsView] = useState(true);

  return (
    <div className='flex flex-col h-max w-full'>
      <button onClick={() => setItemsView(!itemsView)} className='w-full flex flex-row items-center justify-start pl-5'>
        {itemsView ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        <div className='ml-1 flex flex-row items-center'>
          <Folder size={15} />
          <span className='font-normal text-base ml-1.5 text-gray-300'>src</span>
        </div>
      </button>

      <div className={clsx(!itemsView && 'hidden', 'w-full')}>
        <div className='flex flex-row w-full h-full relative'>
          <div className='absolute flex h-full w-[0.5px] bg-slate-500 ml-7 mt-1'/>
          <div className='w-full'>
            {/* ABOUT */}
            <div className='w-full flex flex-row items-center justify-start pl-8 bg-gray-700'>
              <div className='ml-4 flex flex-row items-center'>
                <File size={14} />
                <span className='font-normal text-base ml-1.5 text-gray-300'>about</span>
              </div>
            </div>

            {/* EXPERIENCES */}
            <div className='w-full flex flex-row items-center justify-start pl-8'>
              <div className='ml-4 flex flex-row items-center'>
                <File size={14} />
                <span className='font-normal text-base ml-1.5 text-gray-300'>experiences</span>
              </div>
            </div>

            {/* EDUCATION */}
            <div className='w-full flex flex-row items-center justify-start pl-8'>
              <div className='ml-4 flex flex-row items-center'>
                <File size={14} />
                <span className='font-normal text-base ml-1.5 text-gray-300'>education</span>
              </div>
            </div>

            {/* PROJECTS */}
            <div className='w-full flex flex-row items-center justify-start pl-8'>
              <div className='ml-4 flex flex-row items-center'>
                <File size={14} />
                <span className='font-normal text-base ml-1.5 text-gray-300'>projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Items;