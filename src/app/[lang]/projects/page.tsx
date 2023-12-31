// import { useTranslation } from "react-i18next";
'use client'

import { getDictionaryUseClient } from "@/config/dictionaries/default-dictionary-use-client";
import { useMenu } from "@/redux/menu_context";
import { FolderOpenDot } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface ProjectsProps {
}

function Projects() {

  // const t = useTranslations('projects')
  const { selectedRoute, setSelectedRoute, setSelectedRouteIcon } = useMenu();
  
  useEffect(() => {
    setSelectedRoute('/projects')
    setSelectedRouteIcon(<FolderOpenDot size={14} />)
  });
  
  return (
    <div className=" flex text-justify mt-44 mb-32 w-full items-center justify-center">
      <p className="text-xl text-gray-700">
        {"UNDER DEVELOPMENT"}
      </p>
    </div>
  );
};

export default Projects;