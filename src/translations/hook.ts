import { useState } from "react";
import { toTuple } from "../utils";
import { IData } from "./types";
import { SupportedLocale, SUPPORTED_LOCALES, Translation } from "./translation";

function isSupportedLocale(locale: string): locale is SupportedLocale 
{
    return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function useTranslation(defaultLocale: SupportedLocale) 
{
    const hrefLocale = window.location.href.match(/lang=([^&]*)/)?.[1];
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