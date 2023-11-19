// import { useTranslation } from "react-i18next";
import ExperienceItem from "./components/experience_item";

interface ExperiencesProps {
  }

const Experiences: React.FC<ExperiencesProps> = () => {

    // const {t} = useTranslation();
    
    // const translatedSkillsString = t('experiences.current.skills', { returnObjects: true });
    // const translatedSkillsList = translatedSkillsString;
    // console.log(translatedSkillsList)

    return (
       <div className="w-full h-full flex flex-col mt-20 items-start overflow-y-auto">

            <ExperienceItem 
                company={("experiences.current.company")}
                startYear={("experiences.current.startYear")}
                endYear={("experiences.current.endYear")}
                position={("experiences.current.position")}
                description={["experiences.current.description"]}
                skills={["experiences.current.skills"]}
            />    

            <ExperienceItem 
                company={("experiences.first.company")}
                startYear={("experiences.first.startYear")}
                endYear={("experiences.first.endYear")}
                position={("experiences.first.position")}
                description={["experiences.first.description"]}
                skills={["experiences.first.skills"]}
            />   
            
       </div>
    );
}

export default Experiences