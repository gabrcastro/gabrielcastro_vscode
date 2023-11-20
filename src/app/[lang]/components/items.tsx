'use client'

import clsx from 'clsx';
import { Book, Briefcase, ChevronDown, ChevronRight, Folder, FolderOpenDot, Info, Workflow } from 'lucide-react'
import { useState } from 'react';
import FileItem from './file';
import { useMenu } from '@/redux/menu_context';
// import { useTranslations } from 'next-intl';
// import { getDictionaryUseClient } from '@/config/dictionaries/default-dictionary-use-client';
// import { Locale } from '@/config/i18n';

function Items(params: { lang: string }) {
  const { selectedRoute, setSelectedRoute } = useMenu();

  const [itemsView, setItemsView] = useState(true);
  // const t = useTranslations('menu');

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
          <div className='absolute flex h-full w-[0.5px] bg-slate-500 ml-7 mt-1' />
          <div className='w-full'>

            {/* ABOUT */}
            <FileItem padding samePage route='/about' icon={<Info size={14} />} title={'about'} />

            {/* EXPERIENCES */}
            <FileItem padding samePage route='/experiences' icon={<Briefcase size={14} />} title={'experiences'} />

            {/* EDUCATION */}
            <FileItem padding samePage route='/education' icon={<Book size={14} />} title={'education'} />

            {/* PROJECTS */}
            <FileItem padding samePage route='/projects' icon={<FolderOpenDot size={14} />} title={'projects'} />
            </div>
        </div>
      </div>

    </div>
  );
}

export default Items;