import React from 'react';
import {pagesData} from "@/lid/data";
import s from "./heading.module.scss";

type pageData = (typeof pagesData)[number]

export const Heading = ({pageTitle,pageDescription}:pageData) => {
    return (
        <>
            <h2 className={s.title}>{pageTitle}</h2>
            <p className={s.description}>{pageDescription}</p>
        </>
    );
};