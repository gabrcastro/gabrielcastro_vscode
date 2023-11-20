'use client'

import { Book, Briefcase, FolderOpenDot, Info } from "lucide-react";
import ItemMenuLeft from "./item_menu_left";
import { useMenu } from "@/redux/menu_context";

export default function Menu() {

  const { selectedRoute, setSelectedRoute } = useMenu();

  return (
    <div className='flex flex-col h-full w-14 bg-gray-900 border border-gray-800'>

      <ItemMenuLeft
        selected={selectedRoute == '/about'}
        route={`/about`}
        icon={<Info color='rgb(229, 231, 235)' />} />

      <ItemMenuLeft
        selected={selectedRoute == '/experiences'}
        route={`/experiences`}
        icon={<Briefcase color='rgb(107, 114, 128)' />} />

      <ItemMenuLeft
        selected={selectedRoute == '/education'}
        route={`/education`}
        icon={<Book color='rgb(107, 114, 128)' />} />

      <ItemMenuLeft
        selected={selectedRoute == '/projects'}
        route={`/projects`}
        icon={<FolderOpenDot color='rgb(107, 114, 128)' />} />

    </div>
  );
}