import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Blocks, BugPlay, ChevronDown, ChevronRight, File, Files, Folder, GitMerge, MoreHorizontal, Search } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'
import Items from './components/items'
import Social from './components/social'
import Intro from './components/number_lines'
import Tabs from './components/tabs'
import PathItem from './components/path_item'
import NumberLines from './components/number_lines'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Castro',
  description: 'Gabriel\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={nunitoSans.className}>

        <div className="flex flex-col w-screen h-screen">
          {/* header */}
          <div className='w-full h-8 p-1.5 flex items-center justify-start bg-gray-900 border border-gray-800'>
            <button type='button' className='w-3.5 h-3.5 rounded-full bg-red-500 mr-1.5' />
            <button type='button' className='w-3.5 h-3.5 rounded-full bg-yellow-500 mr-1.5' />
            <button type='button' className='w-3.5 h-3.5 rounded-full bg-green-500' />
          </div>

          {/* content */}
          <div className='w-full h-full flex flex-row'>
            {/* menu left */}
            <div className='flex flex-col h-full w-14 bg-gray-900 border border-gray-800'>

              <div className='flex flex-row w-full h-12 items-start'>
                <div className='h-full w-[2px] bg-white' />
                <div className='w-full h-full flex items-center justify-center'>
                  <Files color='rgb(229, 231, 235)' />
                </div>
              </div>

              <div className='flex flex-row w-full h-12 items-start'>
                <div className='w-full h-full flex items-center justify-center'>
                  <Search color='rgb(107, 114, 128)' />
                </div>
              </div>

              <div className='flex flex-row w-full h-12 items-start'>
                <div className='w-full h-full flex items-center justify-center'>
                  <GitMerge color='rgb(107, 114, 128)' />
                </div>
              </div>

              <div className='flex flex-row w-full h-12 items-start'>
                <div className='w-full h-full flex items-center justify-center'>
                  <BugPlay color='rgb(107, 114, 128)' />
                </div>
              </div>

              <div className='flex flex-row w-full h-12 items-start'>
                <div className='w-full h-full flex items-center justify-center'>
                  <Blocks color='rgb(107, 114, 128)' />
                </div>
              </div>
            </div>

            {/* files */}
            <div className='flex flex-col items-start h-full w-64 bg-gray-900 border border-gray-800'>

              {/* explorer title */}
              <div className='bg-gray-900 py-1 pl-7 pr-4 w-full h-8 flex flex-row items-center justify-between'>
                <span className='font-semibold text-xs uppercase'>Explorer</span>
                <span>
                  <MoreHorizontal size={15} />
                </span>
              </div>

              {/* title before items */}
              <div className='bg-gray-700 p-1 w-full flex flex-row items-center'>
                <span className='mr-2'>
                  <ChevronDown size={15} />
                </span>
                <span className='font-semibold text-[10px] uppercase'>Gabriel Castro Portfolio</span>
              </div>

              {/* item src */}
              <Items />
              <Social />

            </div>

            {/* pages */}
            <div className='w-full h-full flex flex-col'>
              <Tabs />
              <PathItem />
              <div className='bg-slate-950 w-full h-full flex flex-row'>
                <NumberLines />
                {children}
              </div>
            </div>
          </div>

          {/* footer */}
          <div className='w-full h-6 flex items-center justify-between bg-gray-900 border border-gray-800'>
            <div>
              <button type="button" className="bg-slate-800 px-2">
                <span className="font-light text-gray-300 text-base">English</span>
              </button>
              <button type="button" className='bg-gray-900 px-2'>
                <span className="font-light text-gray-300 text-base">Portuguese</span>
              </button>
            </div>

            <div>
              <button type="button" className="bg-slate-800 px-2">
                <span className="font-light text-gray-300 text-base">Dark</span>
              </button>
              <button type="button" className='bg-gray-900 px-2'>
                <span className="font-light text-gray-300 text-base">Light</span>
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
