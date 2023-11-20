'use client'

import clsx from 'clsx';
import { Blocks, Book, BookCopy, Briefcase, BugPlay, ChevronDown, ChevronRight, File, Files, Folder, FolderOpenDot, GitMerge, Home, Info, MoreHorizontal, Search, Workflow } from 'lucide-react'
import { useState } from 'react';
import FileItem from './file';
import { useTranslations } from 'next-intl';
import { getDictionaryUseClient } from '@/config/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n';

function Items(params: {lang: string}) {

  const [itemsView, setItemsView] = useState(true);
  const t = getDictionaryUseClient(params.lang as Locale);

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
          <div className='w-full pl-8'>

            {/* ABOUT */}
            <FileItem samePage route='/about' icon={<Info size={14} />} title={t.menu.about} />

            {/* EXPERIENCES */}
            <FileItem samePage route='/experiences' icon={<Briefcase size={14} />} title={t.menu.experiences} />

            {/* EDUCATION */}
            <FileItem samePage route='/education' icon={<Book size={14} />} title={t.menu.education} />

            {/* PROJECTS */}
            <FileItem samePage route='/projects' icon={<FolderOpenDot size={14} />} title={t.menu.projects} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Items;