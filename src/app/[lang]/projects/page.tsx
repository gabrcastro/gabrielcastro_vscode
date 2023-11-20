// import { useTranslation } from "react-i18next";

import { getDictionaryUseClient } from "@/config/dictionaries/default-dictionary-use-client";
import { useTranslations } from "next-intl";

interface ProjectsProps {
}

function Projects() {

  const t = useTranslations('projects')
  
  return (
    <div className=" flex text-justify mt-44 mb-32 w-full items-center justify-center">
      <p className="text-xl text-gray-700">
        {t('empty')}
      </p>
    </div>
  );
};

export default Projects;