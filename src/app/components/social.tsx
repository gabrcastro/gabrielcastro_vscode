"use client";

import clsx from 'clsx';
import { Blocks, BugPlay, ChevronDown, ChevronRight, File, Files, Folder, GitMerge, Github, Instagram, Linkedin, MoreHorizontal, Search, Youtube } from 'lucide-react'
import { useState } from 'react';

function Social() {

  const [itemsView, setItemsView] = useState(false);

  return (
    <div className='flex flex-col h-max w-full mt-2'>

      {/* ABOUT */}
      <div className='w-full flex flex-row items-center justify-start pl-6'>
        <div className='flex flex-row items-center'>
          <Github size={14} />
          <span className='font-normal text-base ml-1.5 text-gray-300'>github</span>
        </div>
      </div>

      {/* EXPERIENCES */}
      <div className='w-full flex flex-row items-center justify-start pl-6'>
        <div className='flex flex-row items-center'>
          <Linkedin size={14} />
          <span className='font-normal text-base ml-1.5 text-gray-300'>linkedin</span>
        </div>
      </div>

      {/* EDUCATION */}
      <div className='w-full flex flex-row items-center justify-start pl-6'>
        <div className='flex flex-row items-center'>
          <Instagram size={14} />
          <span className='font-normal text-base ml-1.5 text-gray-300'>instagram</span>
        </div>
      </div>

      {/* PROJECTS */}
      <div className='w-full flex flex-row items-center justify-start pl-6'>
        <div className='flex flex-row items-center'>
          <Youtube size={14} />
          <span className='font-normal text-base ml-1.5 text-gray-300'>youtube</span>
        </div>
      </div>
    </div>
  );
}

export default Social;