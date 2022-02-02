import { useState } from "react";
import { toTuple } from "../utils";
import { EN } from "./en";
import { FR } from "./fr";
import { IData } from "./types";

const SUPPORTED_LOCALES = ["EN" , "FR"] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

const Data: { [K in SupportedLocale]: IData } = { EN, FR };

function isSupportedLocale(locale: string): locale is SupportedLocale 
{
    return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function useData(defaultLocale: SupportedLocale) 
{
    const hrefLocale = window.location.href.match(/lang=([^&]*)/)?.[1];
    const initialLocale = isSupportedLocale(hrefLocale!) ? hrefLocale : defaultLocale;
    const [locale, setLocale] = useState<SupportedLocale>(initialLocale);
    const [data, setDataValue] = useState<IData>(Data[locale]);

    function setData(locale: SupportedLocale) 
    {
        setLocale(locale);
        setDataValue(Data[locale]);
    }

    return toTuple(data, locale, setData);
}