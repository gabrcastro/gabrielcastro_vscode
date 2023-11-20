'use client'

import { useMenu } from "@/redux/menu_context";
import clsx from "clsx";
import { Link } from "lucide-react";
import React, { useEffect } from "react";

interface FileProps {
  icon: React.ReactNode,
  title: string,
  route: string,
  samePage: boolean,
  padding?: boolean
}

export default function FileItem({icon, title, route, samePage, padding}: FileProps) {

  const { selectedRoute, setSelectedRoute } = useMenu();

  return (
    <a href={route} target={samePage ? "" : "_blank"} 
       className={clsx(padding && 'pl-8', selectedRoute == route && 'bg-slate-700 z-10', 'hover:opacity-60 hover:cursor-pointer w-full flex flex-row items-center justify-start z-10')}>
      <div className='ml-4 flex flex-row items-center'>
        {icon}
        <span className='font-normal text-base ml-1.5 text-gray-300'>
          {title}
        </span>
      </div>
    </a>
  );
}