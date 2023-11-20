'use client'

import { getDictionaryUseClient } from "@/config/dictionaries/default-dictionary-use-client";
// import { useTranslation } from "react-i18next";
import EducationItem from "./components/education_item";
import { Locale } from "@/config/i18n";
import { useTranslations } from "next-intl";
import { useMenu } from "@/redux/menu_context";
import { useEffect } from "react";

interface EducationProps {

}

function Education() {

    // const t = useTranslations('education')
    const { selectedRoute, setSelectedRoute } = useMenu();

    useEffect(() => {
        setSelectedRoute('/education')
    });

    return (
        <div className="flex flex-col  mt-20 items-start">

            <EducationItem
                title={"Data Analysis"}
                type={"Postgraduate"}
                startYear={"2022"}
                endYear={"2023"}
            />

            <EducationItem
                title={"Web Technologies and Innovations"}
                type={"Postgraduate"}
                startYear={"2021"}
                endYear={"2022"}
            />

            <EducationItem
                title={"Analysis and Systems Development"}
                type={"Graduation"}
                startYear={"2017"}
                endYear={"2020"}
            />

        </div>
    );
}

export default Education