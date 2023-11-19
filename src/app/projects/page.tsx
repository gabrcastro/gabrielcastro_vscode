// import { useTranslation } from "react-i18next";

interface ProjectsProps {
}

const Projects: React.FC<ProjectsProps> = () => {
  // const {t} = useTranslation();

  return (
    <div className=" flex text-justify mt-44 mb-32 w-full items-center justify-center">
      <p className="text-xl text-gray-700">
        {("projects.empty")}
      </p>
    </div>
  );
};

export default Projects;