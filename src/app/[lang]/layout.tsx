import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import { Book, Briefcase, FolderOpenDot, Info, MoreHorizontal } from 'lucide-react'
import Tabs from './components/tabs'
import PathItem from './components/path_item'
import NumberLines from './components/number_lines'
import TitleExplorer from './components/title_explorer'
import ItemMenuLeft from './components/item_menu_left'
import Footer from './components/footer'

import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
// import { i18n } from '@/config/i18n';

const titilliumWeb = Titillium_Web({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Castro',
  description: 'Gabriel\'s Portfolio',
}

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

// export async function generateStaticParams() {
//   const languages = i18n.locales.map((lang) => (( lang )));
//   return languages;
// }

const locales = ['en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { lang }
}: Props) {
  return (
    <html lang={lang}>
      <body className={titilliumWeb.className}  suppressHydrationWarning={true}>
          <div className="flex flex-col w-screen h-screen overflow-hidden">
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
                  route={`/${lang}/about`}
                  icon={<Info color='rgb(229, 231, 235)' />} />

                <ItemMenuLeft
                  selected={false}
                  route={`/${lang}/experiences`}
                  icon={<Briefcase color='rgb(107, 114, 128)' />} />

                <ItemMenuLeft
                  selected={false}
                  route={`/${lang}/education`}
                  icon={<Book color='rgb(107, 114, 128)' />} />

                <ItemMenuLeft
                  selected={false}
                  route={`/${lang}/projects`}
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
                <TitleExplorer lang={lang} />

              </div>

              {/* pages */}
              <div className='w-full h-full flex flex-col '>
                <Tabs />
                <PathItem />
                <div className='bg-slate-900 w-full h-full flex flex-row'>
                  <NumberLines />
                  <div className='w-full overflow-y-auto scrollbar-hide px-32'>
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
