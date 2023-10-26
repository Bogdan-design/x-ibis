import React from 'react';
import s from "./heading.module.scss";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

type pageData = {page:string}

export const Heading = ({page}:pageData) => {
    const {t} = useTranslation()
    return (
        <div>
            <h2 className={s.title}>{t(`${page}.pageTitle`)}</h2>
            <p className={s.description}>{t(`${page}.pageDescription`)}</p>
        </div>
    );
};
