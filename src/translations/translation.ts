import { EN } from "./en";
import { FR } from "./fr";
import { IData } from "./types";

export const SUPPORTED_LOCALES = ["EN" , "FR"] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

class TranslationModule
{
    private static instance: TranslationModule;

    public static get() 
    {
        return this.instance ?? (this.instance = new TranslationModule());
    }

    private translations: Map<SupportedLocale, IData> = new Map();

    public register(locale: SupportedLocale, data: IData) 
    {
        this.translations.set(locale, data);
    }

    public get(locale: SupportedLocale) 
    {
        return this.translations.get(locale);
    }
}

export const Translation = TranslationModule.get();

// Register all translations
Translation.register("EN", EN);
Translation.register("FR", FR);