'use client'

import { useMenu } from "@/redux/menu_context";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function About() {

  // const t = useTranslations('about')
  const { selectedRoute, setSelectedRoute, setSelectedRouteIcon } = useMenu();
  
  useEffect(() => {
    setSelectedRoute('/about')
    setSelectedRouteIcon(<Info size={14} />)
  });

  return (
    <div className="flex flex-col px-10 mt-20 justify-start">
      <div>
        <p className="text-lg font-light">{"Hey, I'm"}</p>
        <p className="text-4xl font-semibold">{"Gabriel Castro"}</p>
        <p className="text-xl">{"Front-End Developer"}</p>
      </div>

      <div className="flex flex-col w-full items-center justify-center mt-10">
        <p className="text-lg text-justify">{"Hello! I'm a technology enthusiast and a dedicated web and mobile front-end developer. My passion for turning ideas into interactive experiences has led me to explore the wonders of software development. I'm driven by curiosity and the challenge of venturing into new horizons, both within the vast universe of programming and beyond. I believe that continuous learning is the key to success. I view each obstacle as an opportunity for growth, and finding efficient solutions is what motivates me to always strive for the best."}</p>
      </div>
    </div>
  );
}
