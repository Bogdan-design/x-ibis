import React from 'react';
import {whatWeDoData} from "@/lid/data";
import s from 'component/servises/card/card.module.scss'

type ProjectProps = (typeof whatWeDoData)[number]

export const Card = ({title,description,icon,link}:ProjectProps) => {
    return (
        <a href={link} className={s.card}>
            {icon}
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
        </a>

    )
};

