import { getDictionaryUseClient } from "@/config/dictionaries/default-dictionary-use-client";
// import { useTranslation } from "react-i18next";
import EducationItem from "./components/education_item";
import { Locale } from "@/config/i18n";
import { useTranslations } from "next-intl";

interface EducationProps {
    
}
  
  function Education()  {

    const t = useTranslations('education')

    return(
        <div className="flex flex-col  mt-20 items-start">

            <EducationItem 
                title={t('last.title')}
                type={t('last.type')}
                startYear={t('last.start')}
                endYear={t('last.end')}
            />

            <EducationItem 
                title={t('second.title')}
                type={t('second.type')}
                startYear={t('second.start')}
                endYear={t('second.end')}
            />

            <EducationItem 
                title={t('first.title')}
                type={t('first.type')}
                startYear={t('first.start')}
                endYear={t('first.end')}
            />

        </div>
    );
}

export default Education