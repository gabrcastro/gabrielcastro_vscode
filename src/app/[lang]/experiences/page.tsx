import ExperienceItem from "./components/experience_item";
import { useTranslations } from "next-intl";

interface ExperiencesProps {
  }

function Experiences() {
    
    const t = useTranslations('experiences');
    
    let currentSkillsArray = ['']
    let currentDescriptionsArray = ['']
    let firstSkillsArray = ['']
    let firstDescriptionsArray = ['']
    
    for (let i = 0; i <= 13; i++) {
        currentSkillsArray.push(t('current.skills.'+i.toString()))
    }
    currentSkillsArray.shift();
    
    for (let i = 0; i <= 3; i++) {
        currentDescriptionsArray.push(t('current.description.'+i.toString()))
    }
    currentDescriptionsArray.shift();
    
    for (let i = 0; i <= 6; i++) {
        firstSkillsArray.push(t('first.skills.'+i.toString()))
    }
    firstSkillsArray.shift();
    
    for (let i = 0; i <= 1; i++) {
        firstDescriptionsArray.push(t('first.description.'+i.toString()))
    }
    firstDescriptionsArray.shift();
    
    return (
       <div className="w-full mt-10 -mb-10 flex flex-col items-start overflow-y-auto scrollbar-hide">

            <ExperienceItem 
                company={t('current.company')}
                startYear={t('current.startYear')}
                endYear={t('current.endYear')}
                position={t('current.position')}
                description={currentDescriptionsArray}
                skills={currentSkillsArray}
            />    

            <ExperienceItem 
                company={t('first.company')}
                startYear={t('first.startYear')}
                endYear={t('first.endYear')}
                position={t('first.position')}
                description={firstDescriptionsArray}
                skills={firstSkillsArray}
            />   
            
       </div>
    );
}

export default Experiences