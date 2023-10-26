'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import abstraction from "@/assest/icon/abstraction.png";
import Image from "next/image";
import '@/common/local'
import {useTranslation} from "next-i18next";
import s from './homePage.module.scss'
import {monumentExtended} from "@/fonts/fonts";

export const HomePage = () => {
  const {t} = useTranslation()
    return (
        <section id='home' className={s.homePage}>
                <Image style={{
                    zIndex: '-1',
                    position: "absolute",
                    maxWidth:'100vw',
                    width: '100%', height: '100%',
                    backgroundColor: 'lightgray',
                    opacity: '85%',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} src={abstraction} alt={''}/>
            <div className={s.container}>
                <div className={s.description} >
                    <h1 style={monumentExtended.style} className={s.title}>{t('Home page title')}</h1>
                    <Button  as={'a'} variant={'link'} href={'/#contact'}>{t('Home page button')}</Button>
                </div>
            </div>
        </section>
    );
};

