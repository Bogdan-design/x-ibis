import React from 'react';
import {pagesData} from "@/lid/data";
import s from './content.module.scss'

type pageData = (typeof pagesData)[0]['options'][number]

export const Content = ({title, description}: pageData) => {
    return (

        <li className={s.list} >
            <h3 className={s.titleOption}>{title}</h3>
            <p className={s.description}>{description}</p>
        </li>
    );
};