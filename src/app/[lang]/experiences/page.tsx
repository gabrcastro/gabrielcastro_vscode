'use client'

import { useMenu } from "@/redux/menu_context";
import ExperienceItem from "./components/experience_item";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Briefcase } from "lucide-react";

interface ExperiencesProps {
}

function Experiences() {

  // const t = useTranslations('experiences');

  // let currentSkillsArray = ['']
  // let currentDescriptionsArray = ['']
  // let firstSkillsArray = ['']
  // let firstDescriptionsArray = ['']

  // for (let i = 0; i <= 13; i++) {
  //     currentSkillsArray.push(t('current.skills.'+i.toString()))
  // }
  // currentSkillsArray.shift();

  // for (let i = 0; i <= 3; i++) {
  //     currentDescriptionsArray.push(t('current.description.'+i.toString()))
  // }
  // currentDescriptionsArray.shift();

  // for (let i = 0; i <= 6; i++) {
  //     firstSkillsArray.push(t('first.skills.'+i.toString()))
  // }
  // firstSkillsArray.shift();

  // for (let i = 0; i <= 1; i++) {
  //     firstDescriptionsArray.push(t('first.description.'+i.toString()))
  // }
  // firstDescriptionsArray.shift();

  const { selectedRoute, setSelectedRoute, setSelectedRouteIcon } = useMenu();

  useEffect(() => {
    setSelectedRoute('/experiences')
    setSelectedRouteIcon(<Briefcase size={14} />)
  });

  return (
    <div className="w-full mt-10 -mb-10 flex flex-col items-start overflow-y-auto scrollbar-hide">

      <ExperienceItem
        company={"Houseasy"}
        startYear={"dec/2022"}
        endYear={"Current"}
        position={"Mid-level Front-End Developer"}
        description={[
          "Development and maintenance of ERP in React.",
          "Development and maintenance of the website in NextJS.",
          "Mobile applications using Flutter and Dart.",
          "Integration of Native Android with Kotlin with the Flutter application."
        ]}
        skills={[
          "React",
          "Typescript",
          "NextJS",
          "Zod",
          "Tailwind CSS",
          "Chakra UI",
          "Flutter",
          "Dart",
          "Kotlin",
          "Android",
          "Firebase",
          "Jest",
          "Cypress",
          "Git"
        ]}
      />

      <ExperienceItem
        company={"Profile"}
        startYear={"sep/2021"}
        endYear={"sep/2022"}
        position={"Mid-Level Front-End Developer"}
        description={[
          "Development and maintenance of a web system with Angular.",
          "Maintenance of mobile applications with Flutter."
        ]}
        skills={[
          "Angular",
          "Typescript",
          "Material UI",
          "CSS3",
          "Flutter",
          "Dart",
          "Git"
        ]}
      />

    </div>
  );
}

export default Experiences