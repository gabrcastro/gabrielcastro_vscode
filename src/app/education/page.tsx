"use client"

// import { useTranslation } from "react-i18next";
import EducationItem from "./components/education_item";

interface EducationProps {
  }
  
  const Education: React.FC<EducationProps> = () => {

    // const {t} = useTranslation();

    return(
        <div className="flex flex-col  mt-20 items-start">

            <EducationItem 
                title={("education.last.title")}
                type={("education.last.type")}
                startYear="2022"
                endYear="2023"
            />

            <EducationItem 
                title={("education.second.title")}
                type={("education.second.type")}
                startYear="2021"
                endYear="2022"
            />

            <EducationItem 
                title={("education.first.title")}
                type={("education.first.type")}
                startYear="2017"
                endYear="2020"
            />

        </div>
    );
}

export default Education