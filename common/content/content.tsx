import React from 'react';
import {pagesData} from "@/lid/data";
import s from './content.module.scss'

type pageData = (typeof pagesData)[number]['options'][number]

export const Content = ({title, description}: pageData) => {
    return (
        <div className={s.list}>
            <h3 className={s.titleOption}>{title}</h3>
            <p className={s.description}>{description}</p>
        </div>
    );
};