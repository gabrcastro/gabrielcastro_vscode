import type { Metadata } from 'next'

import { Titillium_Web } from 'next/font/google'

import './globals.css'

import { Book, Briefcase, FolderOpenDot, Info, MoreHorizontal } from 'lucide-react'
import Tabs from './components/tabs'
import PathItem from './components/path_item'
import NumberLines from './components/number_lines'
import TitleExplorer from './components/title_explorer'
import ItemMenuLeft from './components/item_menu_left'
import Footer from './components/footer'

const titilliumWeb = Titillium_Web({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Castro',
  description: 'Gabriel\'s Portfolio',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {

  return (
    <html lang={params.lang}>
      <body className={titilliumWeb.className}>

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

              <ItemMenuLeft
                selected
                route='/about'
                icon={<Info color='rgb(229, 231, 235)' />} />

              <ItemMenuLeft
                selected={false}
                route='/experiences'
                icon={<Briefcase color='rgb(107, 114, 128)' />} />

              <ItemMenuLeft
                selected={false}
                route='/education'
                icon={<Book color='rgb(107, 114, 128)' />} />

              <ItemMenuLeft
                selected={false}
                route='/projects'
                icon={<FolderOpenDot color='rgb(107, 114, 128)' />} />

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
              <TitleExplorer />

            </div>

            {/* pages */}
            <div className='w-full h-full flex flex-col'>
              <Tabs />
              <PathItem />
              <div className='bg-slate-900 w-full h-full flex flex-row'>
                <NumberLines />
                <div className='w-full h-full overflow-y-auto overflow-x-hidden'>
                  {children}
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
