import { Link } from "lucide-react";
import React from "react";

interface FileProps {
  icon: React.ReactNode,
  title: string,
  route: string,
  samePage: boolean
}

export default function FileItem({icon, title, route, samePage}: FileProps) {
  return (
    <a href={route} target={samePage ? "" : "_blank"} className='hover:opacity-60 hover:cursor-pointer w-full flex flex-row items-center justify-start'>
      <div className='ml-4 flex flex-row items-center'>
        {icon}
        <span className='font-normal text-base ml-1.5 text-gray-300'>
          {title}
        </span>
      </div>
    </a>
  );
}