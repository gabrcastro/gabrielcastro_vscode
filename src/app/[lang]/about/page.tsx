import { useTranslations } from "next-intl";

export default function About() {

  const t = useTranslations('about')

  return (
    <div className="flex flex-col px-10 mt-20 justify-start">
      <div>
        <p className="text-lg font-light">{t('greetings')}</p>
        <p className="text-4xl font-semibold">{t('name')}</p>
        <p className="text-xl">{t('position')}</p>
      </div>

      <div className="flex flex-col w-full items-center justify-center mt-10">
        <p className="text-lg text-justify">{t('text')}</p>
      </div>
    </div>
  );
}
