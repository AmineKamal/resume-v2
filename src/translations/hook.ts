import { useState } from "react";
import { toTuple } from "../utils";
import { IData } from "./types";
import { SupportedLocale, isSupportedLocale, Translation } from "./translation";

export function useTranslation(defaultLocale: SupportedLocale) 
{
    const hrefLocale = window.location.href.match(/lang=([^&]*)/)?.[1].toUpperCase();
    const initialLocale = isSupportedLocale(hrefLocale!) ? hrefLocale : defaultLocale;
    const [locale, setLocale] = useState<SupportedLocale>(initialLocale);
    const [data, setData] = useState<IData>(Translation.get(locale)!);

    function setDataWithLocale(locale: SupportedLocale) 
    {
        setLocale(locale);
        setData(Translation.get(locale)!);
    }

    return toTuple(data, locale, setDataWithLocale);
}