import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/public/locales/en/common.json'
import de from '@/public/locales/de/common.json'
import pl from '@/public/locales/pl/common.json'
import {Constants} from "@/common/local/constants";



const resources ={
    [Constants.EN]: {
        translation: en
    },
    [Constants.DE]: {
        translation: de
    },
    [Constants.PL]: {
        translation: pl
    }
}

i18n
    .use(initReactI18next)
    // .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: Constants.EN,
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });



