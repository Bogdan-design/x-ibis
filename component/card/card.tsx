import React from 'react';
import s from './card.module.scss'
import {whatWeDoData} from "@/lid/data";

type ProjectProps = (typeof whatWeDoData)[number]

export const Card = ({title,description,icon,link}:ProjectProps) => {
    return (
        <a href={link} className={s.card}>
            {icon}
            <p>{title}</p>
            <p>{description}</p>
        </a>

    )
};

