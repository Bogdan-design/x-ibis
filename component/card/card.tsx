import React, {ReactNode} from 'react';
import s from './card.module.scss'
import {whatWeDoData} from "@/lid/data";
import Image from "next/image";

type ProjectProps = (typeof whatWeDoData)[number]

export const Card = ({title,description,icon,link}:ProjectProps) => {
    return (
        <a href={link} className={s.card}>
            <Image src={icon} alt={title}/>
            <p>{title}</p>
            <p>{description}</p>
        </a>

    )
};

