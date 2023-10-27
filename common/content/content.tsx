import React from 'react';
import {pagesData} from "@/lid/data";
import {useTranslation} from "next-i18next";
import {Typography} from "@/component/ui/typography/typography";
import s from './content.module.scss'

type pageData = (typeof pagesData)[number]['options'][number]

export const Content = ({title, description}: pageData) => {

    const {t} = useTranslation()


    return (
        <>
            <div className={s.list}>
                <Typography style={{fontWeight: 'bold'}} as={'h3'} variant={'text'}>{title}</Typography>
                <Typography as={'p'} variant={'text'}>{description}</Typography>
            </div>
            <div className={s.dividerArea}>
                <div className={s.divider}></div>
            </div>
        </>
    );
};