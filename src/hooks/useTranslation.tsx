import { useState } from "react";
import { toTuple } from "../utils";
import { IData } from "../translations/types";
import { SupportedLocale, isSupportedLocale, Translation } from "../translations/translation";

function getUrlLang() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");

    if (!lang) {
        return;
    }

    return lang.toUpperCase();
}

export function useTranslation(defaultLocale: SupportedLocale) {
    const hrefLocale = getUrlLang();
    const initialLocale = isSupportedLocale(hrefLocale!) ? hrefLocale : defaultLocale;
    const [locale, setLocale] = useState<SupportedLocale>(initialLocale);
    const [data, setData] = useState<IData>(Translation.get(locale)!);

    function setDataWithLocale(locale: SupportedLocale) {
        setLocale(locale);
        setData(Translation.get(locale)!);
    }

    return toTuple(data, locale, setDataWithLocale);
}
