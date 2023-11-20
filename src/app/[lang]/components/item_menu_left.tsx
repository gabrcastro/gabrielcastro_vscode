'use client'

import { useMenu } from "@/redux/menu_context";
import { useEffect } from "react";

interface ItemMenuLeftProps {
  icon: React.ReactNode,
  route: string,
  selected: boolean
}

export default function ItemMenuLeft({ icon, route, selected }: ItemMenuLeftProps) {

  return (
    <a href={route} className='flex flex-row w-full h-12 items-start'>
      {selected && <div className='h-full w-[2px] bg-white' />}
      <div className='w-full h-full flex items-center justify-center'>
        {icon}
      </div>
    </a>
  );
}