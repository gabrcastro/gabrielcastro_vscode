const dictionaries = {
  en: () => import("./en.json").then(r => r.default),
  pt: () => import("./pt.json").then(r => r.default)
}

export const getDictionary = (lang: string) => {
  return dictionaries[lang as keyof typeof dictionaries]();
};